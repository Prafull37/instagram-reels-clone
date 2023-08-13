import { faker } from '@faker-js/faker';
import getVideoUrl from './randomVideos';

function generateReels() {
  const fakeData = {
    id:faker.string.uuid(),
    user: {
      username: faker.internet.userName(),
      profile_picture: faker.image.imageUrl(),
    },
    description: faker.lorem.sentence(),
    video_src:getVideoUrl() ,
    likes: faker.datatype.number({
      min:10,
      max:50
    }),
    comments: [
      {
        id:faker.string.uuid(),
        user: faker.internet.userName(),
        comment: faker.lorem.sentence(),
      },
      {
        id:faker.string.uuid(),
        user: faker.internet.userName(),
        comment: faker.lorem.sentence(),
      },
    ],
    tags: [`#${faker.lorem.word()}`, `#${faker.lorem.word()}`, `#${faker.lorem.word()}`],
  };

  return fakeData;
}

export default generateReels;

