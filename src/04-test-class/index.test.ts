import { InsufficientFundsError, TransferFailedError, getBankAccount } from '.';
const initialBalance = 200;
const moreThanBalance = 220;
const someAmount = 20;
describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const bankAccount = getBankAccount(initialBalance);
    expect(bankAccount.getBalance()).toBe(initialBalance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const bankAccount = getBankAccount(initialBalance);
    const test = () => bankAccount.withdraw(moreThanBalance);
    expect(test).toThrow(new InsufficientFundsError(initialBalance));
  });

  test('should throw error when transferring more than balance', () => {
    const bankAccountOne = getBankAccount(initialBalance);
    const secondBankAccount = getBankAccount(someAmount);
    const test = () =>
      bankAccountOne.transfer(moreThanBalance, secondBankAccount)
    expect(test).toThrowError;
  });

  test('should throw error when transferring to the same account', () => {
    const bankAccount = getBankAccount(initialBalance);
    const test = () => bankAccount.transfer(initialBalance, bankAccount);
    expect(test).toThrow(new TransferFailedError());
  });

  test('should deposit money', () => {
    const bankAccount = getBankAccount(initialBalance);
    bankAccount.deposit(someAmount);
    expect(bankAccount.getBalance()).toBe(initialBalance + someAmount);
  });

  test('should withdraw money', () => {
    const bankAccount = getBankAccount(initialBalance);
    bankAccount.withdraw(someAmount);
    expect(bankAccount.getBalance()).toBe(initialBalance - someAmount);
  });

  test('should transfer money', () => {
    const bankAccount = getBankAccount(initialBalance);
    const secondBankAccount = getBankAccount(someAmount);
    bankAccount.transfer(someAmount, secondBankAccount);
    expect(secondBankAccount.getBalance()).toBe(someAmount + someAmount);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here

  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
  });
});
