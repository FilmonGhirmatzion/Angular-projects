import { SalesPerson } from './sales-person';

describe('SalesPerson', () => {
  it('should create an instance', () => {
    expect(new SalesPerson('John', 'Doe', 'john.doe@example.com', 1000)).toBeTruthy();
  });
});
