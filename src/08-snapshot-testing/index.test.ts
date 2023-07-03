// Uncomment the code below and write your tests
import { generateLinkedList } from './index';
describe('generateLinkedList', () => {
  // Check match by expect(...).toStrictEqual(...)
  test('should generate linked list from values 1', () => {
    const result = generateLinkedList([1, 1, 1]);
    const expectedresult = {
      value: 1,
      next: {
        value: 1,
        next: {
          value: 1,
          next: {
            value: null,
            next: null,
          },
        },
      },
    };
    expect(result).toStrictEqual(expectedresult);

  });
  test('should generate linked list from values 2', () => {
    const result = generateLinkedList([2, 2, 2, 2]);
    const expectedresult = {
      value: 2,
      next: {
        value: 2,
        next: {
          value: 2,
          next: {
            value: 2,
            next: {
              value: null,
              next: null,
            },
          },
        },
      },
    };

    expect(result).toStrictEqual(expectedresult)

  });
});
