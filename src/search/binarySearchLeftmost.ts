/**
 * 二分探索・左端 (Binary search: leftmost)
 * ====
 *
 * - 配列に重複した要素があり、その要素を検索する場合、最も左にある要素の位置を返す二分探索。
 *
 * [二分探索 - Wikipedia](https://ja.wikipedia.org/wiki/%E4%BA%8C%E5%88%86%E6%8E%A2%E7%B4%A2)
 *
 * @return 見つかったデータのインデックス(存在しない場合は-1)
 */
export default function binarySearchLeftmost(array: any[], value: any): number {
  let min = 0;
  let max = array.length - 1;
  while (min < max) {
    let mid = Math.floor(min + (max - min) / 2);

    if (array[mid] < value) {
      min = mid + 1;
    } else {
      max = mid;
    }
  }

  if (array[min] === value) {
    return min;
  }

  return -1;
}
