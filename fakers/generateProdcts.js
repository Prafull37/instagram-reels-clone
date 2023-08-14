import { faker } from '@faker-js/faker';

function generateProduct() {
  const product = {
    id:faker.string.uuid(),
    name: faker.commerce.productName(),
    image: faker.image.url(),
    external_link: faker.internet.url(),
    tags: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
    price:faker.commerce.price()
  };

  return product;
}

export default generateProduct;