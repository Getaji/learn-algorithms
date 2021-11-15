/**
 * 挿入ソート
 * ====
 *
 * 簡単なソートアルゴリズム。
 * ある程度整列している配列に強い。
 * 最悪計算時間は O(n^2) 。
 *
 * 1. 0番目と1番目の要素を比較し、順番が逆なら入れ替える。
 * 2. 2番目の要素が1番目までの要素より小さい場合、前の要素を後ろに1つずらす。
 * 3. 3番目以降も(2)と同じ操作を繰り返す
 *
 * [挿入ソート - Wikipedia](https://ja.wikipedia.org/wiki/%E6%8C%BF%E5%85%A5%E3%82%BD%E3%83%BC%E3%83%88)
 *
 * この関数は引数に渡された配列を変更します。
 */
export default function insertionSort(array: any[]) {
  const len = array.length;

  for (let i = 1; i < len; ++i) {
    const v = array[i];

    let j = i;

    for (; j > 0; --j) {
      if (array[j - 1] > v) {
        array[j] = array[j - 1];
      } else {
        break;
      }
    }

    array[j] = v;
  }

  return array;
}
