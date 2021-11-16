import binarySearchAlt from "../../src/search/binarySearchAlt";

describe("二分探索・別バージョン", () => {
  it("含まれる値", () => {
    expect(binarySearchAlt([0, 1], 0)).toBe(0);
    expect(binarySearchAlt([0, 1], 1)).toBe(1);
    expect(binarySearchAlt([1, 2], 1)).toBe(0);
    expect(binarySearchAlt([1, 2], 2)).toBe(1);
    expect(binarySearchAlt([0, 2, 4], 0)).toBe(0);
    expect(binarySearchAlt([0, 2, 4], 2)).toBe(1);
    expect(binarySearchAlt([0, 2, 4], 4)).toBe(2);
    expect(binarySearchAlt([1, 3, 5], 1)).toBe(0);
    expect(binarySearchAlt([1, 3, 5], 3)).toBe(1);
    expect(binarySearchAlt([1, 3, 5], 5)).toBe(2);
  });
  
  it("含まれない値", () => {
    expect(binarySearchAlt([0, 1], 2)).toBe(-1);
    expect(binarySearchAlt([0, 1], -1)).toBe(-1);
    expect(binarySearchAlt([1, 2], 3)).toBe(-1);
    expect(binarySearchAlt([1, 2], 0)).toBe(-1);
    expect(binarySearchAlt([0, 2, 4], 6)).toBe(-1);
    expect(binarySearchAlt([0, 2, 4], -1)).toBe(-1);
    expect(binarySearchAlt([1, 3, 5], 7)).toBe(-1);
    expect(binarySearchAlt([1, 3, 5], 0)).toBe(-1);
  });
});
