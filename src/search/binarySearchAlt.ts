/**
 * 二分探索・別バージョン (Binary search alternative)
 * ====
 *
 * - 通常の二分探索において、繰り返しごとに中間要素が対象と等しいかをチェックする処理があるが、これを省いたもの。要素が一つ残った時のみこのチェックを行う。
 * - ループごとに1回の比較がなくなるが、平均して1回ループが増える。
 *
 * [二分探索 - Wikipedia](https://ja.wikipedia.org/wiki/%E4%BA%8C%E5%88%86%E6%8E%A2%E7%B4%A2)
 *
 * @return 見つかったデータのインデックス(存在しない場合は-1)
 */
export default function binarySearchAlt<T = any>(array: T[], value: T): number {
  let min = 0;
  let max = array.length - 1;

  while (min !== max) {
    let mid = Math.ceil(min + (max - min) / 2);

    if (array[mid] > value) {
      max = mid - 1;
    } else {
      min = mid;
    }
  }

  if (array[min] === value) {
    return min;
  }

  return -1;
}
