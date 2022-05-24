const { User, Thought} = require('../models');

module.exports = {
    getUsers(req,res) {
        User.find()
        .then(async (user) => {
            const uObj = {
                user,
            };
            return res.json(uObj);
        })
        .catch((err) =>{
            console.log(err);
            return res.status(500).json(err);
        });
    },
    getSingleUser(req,res){
        User.findOne({_id: req.params.id})
        .select('-__v')
        .then((user) =>{
            if(!user){
                res.status(404).json('no one with that id')
            }else{
                res.json({user})
            }
        }).catch((err) =>{
            console.log(err);
            return res.status(500).json(err);
        });
    },
    createUser(req,res){
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json('error'));
    },
    updateUser(req,res){
        User.findOneAndUpdate(
            { _id: req.params.id},
            { $set: req.body},
            { runValidators: true, new: true }
        ).then((user) =>{
            if(!user){
                res.status(404).json('error updating')
            }else{
                res.json({user})
            }
        });
    },
    deleteUser(req,res){
        User.findOneAndDelete({_id: req.params.id})
        .then((user) =>{
            if(!user){
                res.status(404).json('erro try again later')
            }else{
                Thought.deleteMany({_id: {$in: user.thoughts}})
            }
        }).then(() => res.json('user deleted'))
        .catch((err) => res.status(500).json(err));
    },
    addFriend(req,res){
        User.findOneAndUpdate(
            {_id: req.params.id},
            {$addToSet: {friends: req.params.friendsId}},
            { runValidators: true, new: true }
        ).then((user)=>{
            if(!user){
                res.status(404).json('error updating')
            }else{
                res.json({user})
            }
        })
        .catch((err) => res.status(500).json(err));
    },
    delFriend(req,res){
        User.findOneAndUpdate(
            {_id: req.params.id},
            {$pull: {friends: req.params.friendsId}},
            { runValidators: true, new: true }
        ).then((user) =>{
            if(!user){
                res.status(404).json('error updating')
            }else{
                res.json({user})
            }
        })
        .catch((err) => res.status(500).json(err));
    }


};