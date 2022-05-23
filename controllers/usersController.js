const { User, Thought} = require('../models');
const Users = require('../models/Users');

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


};