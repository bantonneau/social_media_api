const { User, Thought } = require('../models');

module.exports = {
  getAllThoughts(req, res) {
    Thought.find()
      .then(thoughts => res.json(thoughts))
      .catch(err => res.status(500).json(err));
  },

  getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then(thought =>
        !thought
          ? res.status(404).json({ message: 'No thought with this ID!' })
          : res.json(thought)
      )
      .catch(err => res.status(500).json(err));
  },

  createThought(req, res) {
    Thought.create(req.body)
      .then(({ _id, username }) => {  // change userId to username
        return User.findOneAndUpdate(
          { username: username },  // change _id: userId to username: username
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then(user => {
        if (!user) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(user);
      })
      .catch(err => res.json(err));
  },


  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then(thought =>
        !thought
          ? res.status(404).json({ message: 'No thought with this ID!' })
          : res.json(thought)
      )
      .catch(err => res.status(500).json(err));
  },

  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then(thought =>
        !thought
          ? res.status(404).json({ message: 'No thought with this ID!' })
          : res.json(thought)
      )
      .catch(err => res.status(500).json(err));
  },

  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $push: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then(thought => res.json(thought))
      .catch(err => res.json(err));
  },

  removeReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    )
      .then(thought => res.json(thought))
      .catch(err => res.json(err));
  },
};
