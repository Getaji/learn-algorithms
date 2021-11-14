/**
 * バケットソート (Bucket sort)
 * ====
 * 
 * バケツソート、ビンソート (bin sort) などともいう。
 * キーの取りうる値の種類に制限を設けている。
 * 最悪計算時間は O(n^2) 。
 * 比較をせずにソートができるが、他のアルゴリズムより高速であるケースは少ない。
 * 
 * `array` の各要素は 0 以上 `range` 未満。
 * 
 * [バケットソート - Wikipedia](https://ja.wikipedia.org/wiki/%E3%83%90%E3%82%B1%E3%83%83%E3%83%88%E3%82%BD%E3%83%BC%E3%83%88)
 * 
 * この関数は引数に渡された配列を変更しません。
 * 
 * @param {any[]} array ソートする配列
 * @param {number} len ソート対象となるデータの個数
 * @param {number} range 取りうる値の範囲
 * @return {any[]}
 */

function bucketSort(array, len, range) {
  if (!array || !array.length) return [];

  if (array.length === 1) return array.slice();

  /** 値ごとの出現回数 */
  const count = Array(range).fill(0);

  /** ソート後配列における値ごとの開始位置 */
  const offset = Array(range).fill(0);

  /* 出現回数を数える */ 
  for (let i = 0; i < len; i++) {
    count[array[i]]++;
  }

  /* 開始位置計算 */
  offset[0] = 0;
  
  for (let i = 1; i < range; i++) {
    offset[i] = offset[i - 1] + count[i - 1];
  }

  const dst = Array(array.length).fill(0);

  /* ソート処理 */
  for (let i = 0; i < len; i++) {
    const target = array[i];
    dst[offset[target]] = target;
    offset[target]++;
  }

  return dst;
}

module.exports = bucketSort;
