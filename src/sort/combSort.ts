/**
 * コムソート (Comb sort)
 * ====
 *
 * - バブルソートの改良版。
 * - コームソート、櫛（くし）ソートともいう。
 * - 内部ソートだが、安定ソートではない。
 * - 実行速度は、ほぼO(n log n)になる。
 *
 * [コムソート - Wikipedia](https://ja.wikipedia.org/wiki/%E3%82%B3%E3%83%A0%E3%82%BD%E3%83%BC%E3%83%88)
 *
 * この関数は引数に渡された配列を変更します。
 */
export default function combSort(array: any[]) {
  /** 配列の長さ */
  const len = array.length;

  if (len <= 1) {
    return array;
  }

  /** 間隔 */
  let h = Math.floor((len * 10) / 13);

  while (true) {
    /** 入れ替えが発生した回数 */
    let swaps = 0;

    for (let i = 0; i + h < len; ++i) {
      if (array[i] > array[i + h]) {
        // 入れ替え
        const n = array[i];
        array[i] = array[i + h];
        array[i + h] = n;
        swaps++;
      }
    }
    
    if (h === 1) {
      if (swaps === 0) {
        // 間隔1かつ入れ替えが発生しなかったら終了
        break;
      }
      // 間隔1でも入れ替えが発生していたらそのまま継続する
    } else {
      // 間隔を再計算して継続する
      h = Math.floor((h * 10) / 13);

      if (h === 0) {
        h = 1;
      }
    }
  }

  return array;
}
