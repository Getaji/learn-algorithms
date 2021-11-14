/**
 * シェーカーソート (Shaker sort)
 * ====
 *
 * - バブルソートを、効率がよくなるように改良したもの。
 * - 双方向バブルソート、改良交換法ともいう。
 * - スキャンを交互に二方向に行う。
 * - 安定な内部ソート。
 * - 最悪計算時間は O(n^2) 。
 *
 * [シェーカーソート - Wikipedia](https://ja.wikipedia.org/wiki/%E3%82%B7%E3%82%A7%E3%83%BC%E3%82%AB%E3%83%BC%E3%82%BD%E3%83%BC%E3%83%88)
 *
 * この関数は引数に渡された配列を変更します。
 *
 * @param {any[]} array
 * @return {any[]}
 */

function insertionSort(array) {
  let topIndex = 0;
  let botIndex = array.length - 1;

  while (true) {
    let lastSwapIndex = topIndex;

    // 順方向のスキャン
    lastSwapIndex = topIndex;

    for (let i = topIndex; i < botIndex; i++) {
      if (array[i] > array[i + 1]) {
        // swap
        const n = array[i];
        array[i] = array[i + 1];
        array[i + 1] = n;
        lastSwapIndex = i;
      }
    }
    botIndex = lastSwapIndex; // 後方のスキャン範囲を狭める

    if (topIndex == botIndex) break;

    // 逆方向のスキャン
    lastSwapIndex = botIndex;

    for (let i = botIndex; i > topIndex; i--) {
      if (array[i] < array[i - 1]) {
        // swap
        const n = array[i];
        array[i] = array[i - 1];
        array[i - 1] = n;
        lastSwapIndex = i;
      }
    }
    topIndex = lastSwapIndex; // 前方のスキャン範囲を狭める

    if (topIndex == botIndex) break;
  }

  return array;
}

module.exports = insertionSort;
