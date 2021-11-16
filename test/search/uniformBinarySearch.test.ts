import { uniformBinarySearch as unisearch, makeLookupTable } from "../../src/search/uniformBinarySearch";

describe("均一二分探索", () => {
  it("含まれる値", () => {
    const table = makeLookupTable(4, 10);
    const array = [1, 3, 5, 6, 7, 9, 14, 15, 17, 19];
    array.forEach((n, i) => {
      expect(unisearch(array, table, n)).toBe(i);
    });
    
    const array2 = array.map(String).sort();
    array2.forEach((s, i) => {
      expect(unisearch(array2, table, s)).toBe(i);
    });
  });
  
  it("含まれない値", () => {
    const table = makeLookupTable(4, 10);
    const array = [1, 3, 5, 6, 7, 9, 14, 15, 17, 19];
    expect(unisearch(array, table, 0)).toBe(-1);
    expect(unisearch(array, table, 10)).toBe(-1);
    expect(unisearch(array, table, 20)).toBe(-1);
    
    const array2 = array.map(String).sort();
    expect(unisearch(array2, table, "0")).toBe(-1);
    expect(unisearch(array2, table, "10")).toBe(-1);
    expect(unisearch(array2, table, "20")).toBe(-1);
  });
});
