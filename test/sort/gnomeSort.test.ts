import gnomeSort from "../../src/sort/gnomeSort";

/** https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array */
function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

describe("挿入ソート", () => {
  it("既に昇順に並んでいる配列は変更がない", () => {
    expect(gnomeSort([0, 1, 2, 3, 4])).toMatchObject([0, 1, 2, 3, 4]);
  });

  it("空の配列は変更がない", () => {
    expect(gnomeSort([])).toMatchObject([]);
  });

  it("値が１つだけの配列は変更がない", () => {
    expect(gnomeSort([0])).toMatchObject([0]);
  });

  it("サンプル1: [4, 3, 2, 1, 0]", () => {
    expect(gnomeSort([4, 3, 2, 1, 0])).toMatchObject([0, 1, 2, 3, 4]);
  });

  it("サンプル2: [3, 1, 2, 0, 4]", () => {
    expect(gnomeSort([3, 1, 2, 0, 4])).toMatchObject([0, 1, 2, 3, 4]);
  });

  it("サンプル3: [4, 1, 2, 3, 0]", () => {
    expect(gnomeSort([4, 1, 2, 3, 0])).toMatchObject([0, 1, 2, 3, 4]);
  });

  it("サンプル4: [4, 1, 2, 3, 0, 6, 5]", () => {
    expect(gnomeSort([4, 1, 2, 3, 0, 6, 5])).toMatchObject([
      0, 1, 2, 3, 4, 5, 6,
    ]);
  });

  it("サンプル5: [0...49] shuffle", () => {
    const array = Array(50).fill(0).map((_, i) => i);
    expect(gnomeSort(shuffle(array.slice()))).toMatchObject(array);
  });
});
