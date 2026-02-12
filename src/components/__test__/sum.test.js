import { sum } from "../sum";

test("sum function should add two numbers correctly", () => {

    const result = sum(3, 4);

    // Assertion to check if the result is as expected
    expect(result).toBe(7);
});