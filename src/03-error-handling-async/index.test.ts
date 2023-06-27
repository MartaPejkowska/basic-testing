// Uncomment the code below and write your tests
import { throwError, throwCustomError, resolveValue, MyAwesomeError, rejectCustomError } from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    return await resolveValue('value').then(data => {
      expect(data).toBe('value')
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    expect(()=>throwError('Error')).toThrowError(Error)
    expect(()=>throwError('Error')).toThrow('Error')
  });

  test('should throw error with default message if message is not provided', () => {
    expect(()=>throwError()).toThrow('Oops!')
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(()=>throwCustomError()).toThrow(new MyAwesomeError())
    expect(()=>throwCustomError()).toThrow('This is my awesome custom error!')
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(()=>rejectCustomError()).rejects.toThrow(new MyAwesomeError())
  });
});
})