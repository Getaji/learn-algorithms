/**
 * 選択ソート (Selection sort)
 * ====
 *
 * - 配列から最小値を探し、配列の先頭要素と入れ替えていくことで並べ替える。
 * - 最悪時間計算量は O(n2) と遅いため、一般にはクイックソートなどのより高速な方法が利用される。しかし、空間計算量が限られるため他の高速な手法が使えない場合や、ソートする配列が充分小さく、選択ソートが高速に動作することが保証されている場合に利用されることがある。
 * - 選択ソートは内部ソートである。また、安定ソートではない。
 * - 選択ソートの改良として、ヒープソートが挙げられる。
 *
 * [選択ソート - Wikipedia](https://ja.wikipedia.org/wiki/%E9%81%B8%E6%8A%9E%E3%82%BD%E3%83%BC%E3%83%88)
 *
 * この関数は引数に渡された配列を変更します。
 */
export default function selectionSort(array: any[]) {
  for (let i = 0, len = array.length; i < len; i++) {
    // i番目以降で最小の値のインデックス
    let minI = i;

    for (let j = minI; j < len; j++) {
      if (array[j] < array[minI]) {
        // より小さい値があったらセット
        minI = j;
      }
    }
    
    // swap
    const n = array[i];
    array[i] = array[minI];
    array[minI] = n;
  }

  return array;
}
