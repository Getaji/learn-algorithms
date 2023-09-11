import { random, create } from  "../../src/random/middle-square-method";

describe("Middle-Square Method", () => {
  it("random() even", () => {
    expect(random(4, 1763)).toBe(1081);
    expect(random(4, 2135)).toBe(5582);
    expect(random(6, 675248)).toBe(959861);
  });

  it("create()", () => {
    const rnd1 = create(2, 42);
    expect(rnd1()).toBe(76);
    expect(rnd1()).toBe(77);
    expect(rnd1()).toBe(92);
    expect(rnd1()).toBe(46);

    const rnd2 = create(4, 1763);
    expect(rnd2()).toBe(1081);
    expect(rnd2()).toBe(1685);
    expect(rnd2()).toBe(8392);
    expect(rnd2()).toBe(4256);
    expect(rnd2()).toBe(1135);
  });
});
