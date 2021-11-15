/**
 * ノームソート (Gnome sort)
 * ====
 *
 * - 挿入ソートに似ているが、要素の移動は挿入ではなくバブルソートのような一連の交換で行う。
 * - 非常に単純であり、入れ子のループも必要としない。時間計算量は O(n^2) だが、実際にソートしてみると挿入ソートと同程度の性能を発揮する。
 * - 隣接する2つの要素の順序が正しくないときは、それらを交換する。
 * - 処理対象全部を読み込む前にソートを開始できるため、標準入力やパイプラインで読み込みながら並行してソート処理が行える
 *
 * [ノームソート - Wikipedia](https://ja.wikipedia.org/wiki/%E3%83%8E%E3%83%BC%E3%83%A0%E3%82%BD%E3%83%BC%E3%83%88)
 *
 * この関数は引数に渡された配列を変更します。
 */
export default function gnomeSort(array: any[]) {
  for (let i = 1, len = array.length; i < len;) {
    // 降順にソートする場合は >= で比較する
    if (array[i - 1] <= array[i]) {
      // 正順なので次に進む
      i++;
    } else {
      // 逆順なので交換する
      const n = array[i - 1];
      array[i - 1] = array[i];
      array[i] = n;
      
      // 交換したので端でなければ前に戻る
      if (i > 1) {
        i--;
      }
    }
  }

  return array;
}