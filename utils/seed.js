const connection = require('../config/connection');
const { User, Thought} = require('../models');
const {getRandomUser,getRandomThought,getRandom} = require ('./data');

connection.on('error', (err) => err);

connection.once('open', async () =>{
    console.log('data connected');

    await User.deleteMany({});
    await Thought.deleteMany({});

    const users = [];
    let thoughts = getRandomThought();

    for(i=0;i<8;i++){
      let username = getRandomUser() + i;
      const email = `${username}@gmail.com`;
      const friends = getRandomUser();
      const info = thoughts
      users.push({
          username,
          email,
          thoughts: info,
          friends,
      });
    }

    await User.collection.insertMany(users);

    await Thought.collection.insertMany(thoughts);

    console.table(users);
    console.table(thoughts);
    console.info('complete');
    process.exit(0);
})