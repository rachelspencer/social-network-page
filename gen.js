const faker = require('faker');
const fs = require('fs');

const times = (t, fn) => {
  return new Array(t).fill(null).map(fn);
};

const buildUser = () => {
  return {
    id: faker.datatype.number(),
    name: faker.name.firstName() + ' ' + faker.name.lastName(),
    imageUrl: 'https://source.unsplash.com/80x80/?person',
  };
};

const buildPost = (user) => {
  return {
    id: faker.datatype.number(),
    userId: user.id,
    content: faker.lorem.sentences(),
    imageUrl: `https://source.unsplash.com/800x600/?${faker.animal.type()}`,
  };
};

const buildComment = (user, post) => {
  return {
    id: faker.datatype.number(),
    userId: user.id,
    postId: post.id,
    content: faker.lorem.sentence(),
  };
};

const randomEl = (col) => {
  return col[Math.floor(Math.random() * col.length)];
};

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

const users = times(10, buildUser);
const posts = times(20, () => buildPost(randomEl(users), users));
const comments = times(100, () =>
  buildComment(randomEl(users), randomEl(posts))
);

const currentUser = randomEl(users);

posts.forEach((post) => {
  comments.push(buildComment(currentUser, post));
});

shuffle(comments);

fs.writeFileSync(
  'db.json',
  JSON.stringify({
    'current-user': currentUser,
    users,
    posts,
    comments,
  })
);
