/**
 * Middle-square method (平方採中法/二乗中抜き法) で疑似乱数を生成して返します。
 * 桁数は偶数でなくてはなりません。
 * 
 * @param digit 生成する桁数
 * @param seed シード値
 */
export function random(digit: number, seed: number) {
  // シード値を2乗する
  const x = seed ** 2;

  // 桁数の2乗に満たない場合は先頭に0を加えて補う
  const digit2n = String(digit ** 2).length;
  const s = String(x).padStart(digit % 2 === 0 ? digit2n : (digit2n + 1), "0");

  const i = (s.length - digit) / 2;
  return parseInt(s.slice(i, i + digit));
}
/**
 * 呼び出す度に前回の結果をシード値として疑似乱数を生成する関数を返します。
 * 
 * @param digit 生成する桁数
 * @param seed 初期シード値
 */
export function create(digit: number, seed: number) {
  let currentSeed = seed;
  return () => {
    return currentSeed = random(digit, currentSeed);
  }
}
