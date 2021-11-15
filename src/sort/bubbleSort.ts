/**
 * バブルソート
 * ====
 *
 * 簡単なソートアルゴリズム。
 * 並列処理との親和性が高い。
 * 最悪計算時間は O(n^2) 。
 *
 * 全ての要素に関して、隣接する要素と比較し順序が逆であれば入れ替える。
 * これを要素数-1回繰り返す。
 *
 * [バブルソート - Wikipedia](https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%96%E3%83%AB%E3%82%BD%E3%83%BC%E3%83%88)
 *
 * この関数は引数に渡された配列を変更します。
 */
export default function bubbleSort(array: any[]) {
  const len = array.length - 1;

  for (let i = 0; i < len; ++i) {
    for (let j = len; j > i; --j) {
      if (array[j] < array[j - 1]) {
        const v = array[j];
        array[j] = array[j - 1];
        array[j - 1] = v;
      }
    }
  }

  return array;
}
