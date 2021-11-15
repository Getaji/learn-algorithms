import bucketSort from "../../src/sort/bucketSort";

describe("挿入ソート", () => {
  it("既に昇順に並んでいる配列は変更がない", () => {
    expect(bucketSort([0, 1, 2, 3, 4], 5, 5)).toMatchObject([0, 1, 2, 3, 4]);
  });

  it("空の配列は変更がない", () => {
    expect(bucketSort([], 0, 0)).toMatchObject([]);
  });

  it("値が１つだけの配列は変更がない", () => {
    expect(bucketSort([0], 1, 1)).toMatchObject([0]);
  });

  it("サンプル1: [4, 3, 2, 1, 0]", () => {
    expect(bucketSort([4, 3, 2, 1, 0], 5, 5)).toMatchObject([0, 1, 2, 3, 4]);
  });

  it("サンプル2: [3, 1, 2, 0, 4]", () => {
    expect(bucketSort([3, 1, 2, 0, 4], 5, 5)).toMatchObject([0, 1, 2, 3, 4]);
  });

  it("サンプル3: [4, 1, 2, 3, 0]", () => {
    expect(bucketSort([4, 1, 2, 3, 0], 5, 5)).toMatchObject([0, 1, 2, 3, 4]);
  });
});
