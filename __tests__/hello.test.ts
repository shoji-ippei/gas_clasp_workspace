import hello from '../src/hello';

describe('hello', (): void => {
  test('should say hello to Tom.', (): void => {
    const response: string = hello('Tom');
    expect(response).toBe('Hello, Tom!');
  });
});
