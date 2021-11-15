import bubbleSort from "../../src/sort/bubbleSort";

describe("バブルソート", () => {
  it("既に昇順に並んでいる配列は変更がない", () => {
    expect(bubbleSort([0, 1, 2, 3, 4])).toMatchObject([0, 1, 2, 3, 4]);
  });

  it("空の配列は変更がない", () => {
    expect(bubbleSort([])).toMatchObject([]);
  });

  it("値が１つだけの配列は変更がない", () => {
    expect(bubbleSort([0])).toMatchObject([0]);
  });

  it("サンプル1: [4, 3, 2, 1, 0]", () => {
    expect(bubbleSort([4, 3, 2, 1, 0])).toMatchObject([0, 1, 2, 3, 4]);
  });

  it("サンプル2: [3, 1, 2, 0, 4]", () => {
    expect(bubbleSort([3, 1, 2, 0, 4])).toMatchObject([0, 1, 2, 3, 4]);
  });

  it("サンプル3: [4, 1, 2, 3, 0]", () => {
    expect(bubbleSort([4, 1, 2, 3, 0])).toMatchObject([0, 1, 2, 3, 4]);
  });
});
