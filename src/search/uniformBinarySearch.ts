/**
 * 均一二分探索 (Uniform binary search)
 * ====
 *
 * - 二分探索の派生。ルックアップテーブルを使用する。
 * - ルックアップテーブルは一般的に加算やシフトよりも高速である。
 * - 多くの検索は、同じ配列、あるいは同じ長さの複数の配列に対して行われる。
 *
 * [Uniform binary search - Wikipedia](https://en.wikipedia.org/wiki/Uniform_binary_search)
 *
 * @return 見つかったデータのインデックス(存在しない場合は-1)
 */
export function uniformBinarySearch<T = any>(
  array: T[],
  table: number[],
  value: T
): number {
  let i = table[0] - 1;
  let count = 0;

  while (table[count] !== 0) {
    if (array[i] === value) {
      return i;
    }
    /* istanbul ignore next */
    if (table[count] === 0) {
      return -1;
    }
    if (array[i] > value) {
      i -= table[++count];
    } else {
      i += table[++count];
    }
  }

  return -1;
}

/**
 * 均一二分探索用のルックアップテーブル配列を作成する。
 * @param tableSize ルックアップテーブル配列の長さ
 * @param n
 */
export function makeLookupTable(tableSize: number, n: number) {
  const table = Array(tableSize).fill(0);
  let power = 1;
  let i = 0;

  while (true) {
    power <<= 1;
    table[i] = Math.floor((n + (power >> 1)) / power);
    if (table[i++] === 0) break;
  }

  return table;
}

export default uniformBinarySearch;
