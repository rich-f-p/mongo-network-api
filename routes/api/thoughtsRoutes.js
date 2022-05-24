const router = require('express').Router();
const {
    getThoughts,
    singleThought,
    newThought,
    updateThought,
    delThought,
    createReaction,
    delReaction,
} = require('../../controllers/thoughtsController')

router.route('/').get(getThoughts).post(newThought);

router.route('/:thoughtId').get(singleThought).put(updateThought).delete(delThought);

router.route('/:thoughtId/reaction').post(createReaction);

router.route('/:thoughtId/reaction/:reactionId').delete(delReaction);

module.exports = router;