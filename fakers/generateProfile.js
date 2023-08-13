import { faker } from '@faker-js/faker';

function generateUser(uuid) {
  const user = {
    uuid,
    username: faker.internet.userName(),
    name: faker.name.findName(),
    profile_picture: faker.image.imageUrl(),
  };

  return user;
}

export default generateUser;

