import binarySearchRightmost from "../../src/search/binarySearchRightmost";

describe("二分探索・右端", () => {
  it("含まれる値", () => {
    expect(binarySearchRightmost([0, 1], 0)).toBe(0);
    expect(binarySearchRightmost([0, 1], 1)).toBe(1);
    expect(binarySearchRightmost([1, 2], 1)).toBe(0);
    expect(binarySearchRightmost([1, 2], 2)).toBe(1);
    expect(binarySearchRightmost([0, 2, 4], 0)).toBe(0);
    expect(binarySearchRightmost([0, 2, 4], 2)).toBe(1);
    expect(binarySearchRightmost([0, 2, 4], 4)).toBe(2);
    expect(binarySearchRightmost([1, 3, 5], 1)).toBe(0);
    expect(binarySearchRightmost([1, 3, 5], 3)).toBe(1);
    expect(binarySearchRightmost([1, 3, 5], 5)).toBe(2);
  });
  
  it("含まれない値", () => {
    expect(binarySearchRightmost([0, 1], 2)).toBe(-1);
    expect(binarySearchRightmost([0, 1], -1)).toBe(-1);
    expect(binarySearchRightmost([1, 2], 3)).toBe(-1);
    expect(binarySearchRightmost([1, 2], 0)).toBe(-1);
    expect(binarySearchRightmost([0, 2, 4], 6)).toBe(-1);
    expect(binarySearchRightmost([0, 2, 4], -1)).toBe(-1);
    expect(binarySearchRightmost([1, 3, 5], 7)).toBe(-1);
    expect(binarySearchRightmost([1, 3, 5], 0)).toBe(-1);
  });

  it("重複した値の右端", () => {
    expect(binarySearchRightmost([0, 0], 0)).toBe(1);
    expect(binarySearchRightmost([1, 1], 1)).toBe(1);
    expect(binarySearchRightmost([0, 0, 0], 0)).toBe(2);
    expect(binarySearchRightmost([1, 1, 1], 1)).toBe(2);
    expect(binarySearchRightmost([0, 0, 1], 0)).toBe(1);
  });
});
