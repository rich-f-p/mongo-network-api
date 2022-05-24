const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,

} = require('../../controllers/usersController');


router.route('/').get(getUsers).post(createUser);

router.route('/:id').get(getSingleUser);

module.exports = router;