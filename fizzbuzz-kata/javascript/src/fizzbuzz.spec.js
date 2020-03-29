import {calculateFizzBuzz} from "./fizzbuzz";

describe('FizzBuzz', () => {
    it('should return "1" given 1', () => {
        const result = calculateFizzBuzz(1);

        expect(result).toBe('1');
    });
});