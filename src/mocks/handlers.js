import { rest } from 'msw';
import { faker } from '@faker-js/faker';

function createCardsData(id) {
  const randomName = faker.name.findName();
  const cards = [];
  for (let i = 0; i < 3; i += 1) {
    const cardId = faker.random.uuid();
    const cardNo = faker.datatype.number({ min: 10000000000000000 });
    const cardCVVNo = faker.datatype.number({ min: 100, max: 10000 });
    const cardName = randomName;

    const cardExpirationDate = faker.date.future(2);
    cards.push({
      cardId,
      cardNo,
      cardName,
      cardExpirationDate,
      cardCVVNo,
      isCardFreeze: false,
      isCancelled: false,
    });
  }
  return {
    id,
    randomName,
    cards,
  };
}

export default [
  rest.get('/user/:id/cards', (req, res, ctx) => {
    const { id } = req.params;
    return res(
      ctx.json(createCardsData(id)),
    );
  }),
];
