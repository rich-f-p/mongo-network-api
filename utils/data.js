const users = [
    'jacob',
    'john',
    'anna',
    'tim',
    'alex',
    'jill',
    'janet',
    'jenny',
];

const thoughtText = [
    'love it',
    'good',
    'wow',
    'thats terrible',
    'is it real',
    'how did you do it',
    'lets go',
    'fantastic',
];

const reactions = [
    'reaction 1',
    'reaction 2',
    'reaction 3',
    'reaction 4',
    'reaction 5',
    'reaction 6',
    'reaction 7',
    'reaction 8',
];

const getRandom = (arr) => arr[Math.floor(Math.random()* arr.length)];

const getRandomUser = () => `${getRandom(users)}`;

const getRandomThought = () => {
    let results = [];
    for (i=0;i<3;i++){
        results.push({
           thoughtText: getRandom(thoughtText),
           username: this.username,
           reactions: getRandomReaction(2),
        });
    }
    return results;
};

const getRandomReaction = (int) => {
    let results = [];
    for (i=0;i<int;i++){
        results.push({
            reactionBody: getRandom(reactions),
            username: getRandom(users),
        });
    }
    return results;
}

module.exports = { getRandomUser, getRandomThought, getRandom, getRandomReaction,users};