const {Thought, User, Reaction} = require('../models');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json(err));
    },
    singleThought(req,res){
        Thought.findOne({_id: req.params.thoughtId})
        .select('-__v')
        .then((data) =>{
            if(!data){
                res.status(404).json('error: not found')
            }else{
                res.json(data)
            }
        }).catch((err) => res.status(500).json(err));
    },
    newThought(req,res){
        Thought.create(req.body)
        .then((thought) =>{
            return User.findOneAndUpdate(
                {_id: req.body.userId},
                {$addToSet: {thoughts: thought._id}},
                { new: true }
            );
        }).then((data) =>{
            if(!data){
                res.status(404).json('error: not created')
            }else{
                res.json(data)
            }
        }).catch((err) => res.status(500).json(err));
    },
    updateThought(req,res){
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$set: req.body},
            { runValidators: true, new: true }
        ).then((data) =>{
            if(!data){
                res.status(404).json('error: not updated')
            }else{
                res.json(data)
            }
        }).catch((err) => res.status(500).json(err));
    },
    delThought(req,res){
        Thought.findOneAndDelete({_id: req.params.thoughtId})
        .then((thought) =>{
            if(!thought){
                res.status(404).json('error: not deleted')
            }else{
                User.findOneAndUpdate(    
                    { thoughts: req.params.thoughtId },
                    { $pull: { thoughts: req.params.thoughtId } },
                    { new: true }
                ).then((data)=>{
                    if(!data){
                        res.status(404).json('error: not updated')
                    }else{
                        res.json(data)
                    }
                })
            }
        }).catch((err) => res.status(500).json(err));
    },

    createReaction(req,res){
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            { $addToSet: {reactions: req.body}},
            { runValidators: true, new: true }
        ).then((data)=>{
            if(!data){
                res.status(404).json('error: no reaction')
            }else{
                res.json(data)
            }
        }).catch((err) => res.status(500).json(err));
    },
    delReaction(req,res){
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$pull:{ reactions:{ reactionId: req.params.reactionId}}},
            {runValidators:true, new:true}
        ).then((data)=>{
            if(!data){
                res.status(404).json('error: no reaction')
            }else{
                res.json(data)
            }
        }).catch((err) => res.status(500).json(err));
    },
}