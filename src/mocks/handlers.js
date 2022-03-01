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

function createRecentTransactionData(cardId) {
  console.log(cardId);
  const recentTransaction = [];
  for (let i = 0; i < 4; i += 1) {
    const id = faker.random.uuid();
    const name = faker.random.word();
    const date = faker.date.recent(5);
    const amount = faker.datatype.number({ min: -1000, max: 1000 });
    const image = faker.random.arrayElement(['Flights', 'MegaPhone', 'FileStorage']);
    const message = amount > 0 ? 'Refund on credit card' : 'Charged to debit card';
    recentTransaction.push(
      {
        id,
        name,
        date,
        amount,
        image,
        message,
      },
    );
  }
  return recentTransaction;
}

export default [
  rest.get('/user/:id/cards', (req, res, ctx) => {
    const { id } = req.params;
    return res(
      ctx.json(createCardsData(id)),
    );
  }),
  rest.get('/cards/:id/recent-transactions', (req, res, ctx) => {
    const { id } = req.params;
    return res(
      ctx.json(createRecentTransactionData(id)),
    );
  }),
];
