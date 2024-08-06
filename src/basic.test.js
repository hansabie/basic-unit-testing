import { sumAndPlusTen, maxNum, factorial } from "./basic";
import { describe, it, expect } from "vitest";

describe("sumAndPlusTen", () => {
  it("should return the sum of a+b+10 when a,b is integer", () => {
    //AAA pattern
    /// Arange - set up the test
    const a = 5;
    const b = 10;
    // //Act-execute the test
    const result = sumAndPlusTen(a, b);
    // //Assert - check the result
    expect(result).toBe(25);
  });

  it("should return NaN if any parameters is not provided", () => {
    const a = 5;
    const b = 10;

    const result = sumAndPlusTen();
    expect(result).toBeNaN();
  });
});

// describe("maxNum", () => {
//   it("should return the second argument when it is greater", () => {
//     expect(maxNum(5, 10)).toBe(10);
//   });

//   it("should return the first argument when it is greater", () => {
//     expect(maxNum(50, 10)).toBe(50);
//   });

//   it("should return the first argument when both arguments are equal ", () => {
//     expect(maxNum(15, 15)).toBe(15);
//   });

//   it("should throw and error if one of the arguments is not a number", () => {
//     expect(() => maxNum(5, "10")).toThrowError(
//       "All of the arguments is a number!"
//     );
//   });
// });

describe("factorial", () => {
  it("should return 1 when the input is 0 ", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return 1 when the input is 1  ", () => {
    expect(factorial(1)).toBe(1);
  });

  it(" should throw an error if one the arguments is negative ", () => {
    expect(() => factorial(-10)).toThrowError("Harus number bray");
  });

  it("should return 3628800 when the input is 10  ", () => {
    expect(factorial(10)).toBe(3_628_800);
  });
});
