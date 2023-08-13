import { faker } from '@faker-js/faker';

function generateProduct() {
  const product = {
    uuid:faker.string.uuid(),
    name: faker.commerce.productName(),
    image: faker.image.imageUrl(),
    url: faker.internet.url(),
    external_link: faker.internet.url(),
    tags: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
  };

  return product;
}

export default generateProduct;