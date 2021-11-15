import combSort11 from "../../src/sort/combSort11";

describe("挿入ソート", () => {
  it("既に昇順に並んでいる配列は変更がない", () => {
    expect(combSort11([0, 1, 2, 3, 4])).toMatchObject([0, 1, 2, 3, 4]);
  });

  it("空の配列は変更がない", () => {
    expect(combSort11([])).toMatchObject([]);
  });

  it("値が１つだけの配列は変更がない", () => {
    expect(combSort11([0])).toMatchObject([0]);
  });
  
  it("サンプル1: [4, 3, 2, 1, 0]", () => {
    expect(combSort11([4, 3, 2, 1, 0])).toMatchObject([0, 1, 2, 3, 4]);
  });
  
  it("サンプル2: [3, 1, 2, 0, 4]", () => {
    expect(combSort11([3, 1, 2, 0, 4])).toMatchObject([0, 1, 2, 3, 4]);
  });
  
  it("サンプル3: [4, 1, 2, 3, 0]", () => {
    expect(combSort11([4, 1, 2, 3, 0])).toMatchObject([0, 1, 2, 3, 4]);
  });
  
  it("サンプル4: [4, 1, 2, 3, 0, 6, 5]", () => {
    expect(combSort11([4, 1, 2, 3, 0, 6, 5])).toMatchObject([0, 1, 2, 3, 4, 5, 6]);
  });
})
