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
    }

};