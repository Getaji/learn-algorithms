import linearSearch from "../../src/search/linearSearch";

/** https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array */
function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

describe("線形探索", () => {
  it("長さ0の配列と任意の値: -1", () => {
    expect(linearSearch([], 0)).toBe(-1);
  });
  
  it("長さ1の配列と含まれる値: 0", () => {
    expect(linearSearch([0], 0)).toBe(0);
    expect(linearSearch([1], 1)).toBe(0);
  });
  
  it("長さ1の配列と含まれない値: -1", () => {
    expect(linearSearch([0], 1)).toBe(-1);
    expect(linearSearch([1], 0)).toBe(-1);
  });
  
  it("長さ2の配列と含まれる値", () => {
    expect(linearSearch([0, 1], 0)).toBe(0);
    expect(linearSearch([1, 0], 0)).toBe(1);
    expect(linearSearch([0, 1], 1)).toBe(1);
    expect(linearSearch([1, 0], 1)).toBe(0);
  });
  
  it("長さ2の配列と含まれない値: -1", () => {
    expect(linearSearch([0, 1], 3)).toBe(-1);
    expect(linearSearch([1, 0], 3)).toBe(-1);
  });
  
  it("同じ値のみなら先頭に近い方が優先される", () => {
    expect(linearSearch([0, 0], 0)).toBe(0);
    expect(linearSearch([1, 1], 1)).toBe(0);
  });
  
  it("長さ5以上の配列と含まれる値", () => {
    const arrayLen5 = shuffle(Array(5).fill(0).map((_, i) => i));
    expect(linearSearch(arrayLen5, 0)).toBe(arrayLen5.indexOf(0));
    
    const arrayLen10 = shuffle(Array(10).fill(0).map((_, i) => i));
    expect(linearSearch(arrayLen10, 0)).toBe(arrayLen10.indexOf(0));
  });
});
