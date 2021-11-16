/**
 * 二分探索・右端 (Binary search: rightmost)
 * ====
 *
 * - 配列に重複した要素があり、その要素を検索する場合、最も右にある要素の位置を返す二分探索。
 *
 * [二分探索 - Wikipedia](https://ja.wikipedia.org/wiki/%E4%BA%8C%E5%88%86%E6%8E%A2%E7%B4%A2)
 *
 * @return 見つかったデータのインデックス(存在しない場合は-1)
 */
export default function binarySearchRightmost(array: any[], value: any): number {
  let min = 0;
  let max = array.length;
  
  while (min < max) {
    const mid = Math.floor(min + (max - min) / 2);
    if (array[mid] > value) {
      max = mid;
    } else {
      min = mid + 1;
    }
  }

  return array[max - 1] === value ? max - 1 : -1;
}
