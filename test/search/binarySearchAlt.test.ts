import binarySearchAlt from "../../src/search/binarySearchAlt";

describe("二分探索", () => {
  it("長さ2の配列と含まれる値", () => {
    expect(binarySearchAlt([0, 1], 0)).toBe(0);
    expect(binarySearchAlt([0, 1], 1)).toBe(1);
  });
  
  it("長さ2の配列と含まれない値: -1", () => {
    expect(binarySearchAlt([0, 1], 2)).toBe(-1);
    expect(binarySearchAlt([1, 2], 0)).toBe(-1);
  });
  
  it("長さ5以上の配列と含まれる値", () => {
    const arrayLen5 = Array(5).fill(0).map((_, i) => i);
    expect(binarySearchAlt(arrayLen5, 1)).toBe(arrayLen5.indexOf(1));
    
    // 5...14
    const arrayLen10 = Array(10).fill(0).map((_, i) => i + 5);
    expect(binarySearchAlt(arrayLen10, 11)).toBe(arrayLen10.indexOf(11));
  });
});