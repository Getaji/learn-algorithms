/**
 * 二分探索 (Binary search)
 * ====
 *
 * - カタカナ表記でバイナリサーチともいう。
 * - ソート済みのリストや配列に入ったデータ（同一の値はないものとする）に対する検索を行うにあたって、 中央の値を見て、検索したい値との大小関係を用いて、検索したい値が中央の値の右にあるか、左にあるかを判断して、片側には存在しないことを確かめながら検索していく。
 * - 大小関係を用いるため、未ソートのリストや大小関係の定義されない要素を含むリストには二分探索を用いることはできない。
 * - n個のデータがある場合、時間計算量はO(log2n)である。
 *
 * [二分探索 - Wikipedia](https://ja.wikipedia.org/wiki/%E4%BA%8C%E5%88%86%E6%8E%A2%E7%B4%A2)
 *
 * @return 見つかったデータのインデックス(存在しない場合は-1)
 */
export default function binarySearch<T = any>(array: T[], value: T): number {
  for (let min = 0, max = array.length - 1; min <= max; ) {
    let mid = Math.floor(min + (max - min) / 2);

    if (array[mid] < value) {
      min = mid + 1;
    } else if (array[mid] > value) {
      max = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}
