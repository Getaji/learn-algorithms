/**
 * クイックソート (Quick sort)
 * ====
 *
 * - 分割統治法の一種。基準値よりも大きいグループと小さいグループに分け、これを再帰的に繰り返す。
 * - 最良計算量および平均計算量は O(n log n) 。最悪計算時間は O(n^2) 。
 * - 他のソート法と比べて一般的に最も高速だと言われているが、対象のデータの並びやデータの数によっては必ずしも速いわけではない。
 * - 安定ソートではない。
 * - グループ分けの手法が幾つかあり、この関数はもっともメジャーな "Lomuto partition scheme" である。
 *   - この手法の問題点である "Dutch national flag problem" 対策のため "fat partition" を採用している。
 * - この関数の実装は、効率的なピボットの選択に対応している。
 * - この関数の実装は、英語版Wikipediaで挙げられている以下の最適化を行っていない。
 *   - 小さいパーティションを再帰呼び出しした後で、大きいパーティションを末尾再帰する。
 *   - パーティションのサイズが一定以下になった場合（長さ10など）、他の効率的なソートアルゴリズムを利用する。
 *
 * - [クイックソート - Wikipedia](https://ja.wikipedia.org/wiki/%E3%82%AF%E3%82%A4%E3%83%83%E3%82%AF%E3%82%BD%E3%83%BC%E3%83%88)
 * - [Quicksort - Wikipedia](https://en.wikipedia.org/wiki/Quicksort)
 *
 * - この関数は引数に渡された配列を変更します。
 */
export default function quickSort(array: any[], min = 0, max = array.length - 1) {
  if (min >= 0 && max >= 0 && min < max) {
    const pivot = selectPivot(array, min, max);
    const [left, right] = partition(array, pivot, min, max);
    quickSort(array, min, left - 1);
    quickSort(array, right, max);
  }

  return array;
}

function selectPivot<T = any>(array: T[], min: number, max: number) {
  const mid = Math.floor(min + (max - min) / 2);

  if (array[mid] < array[min]) {
    swap(array, min, mid);
  }
  if (array[max] < array[min]) {
    swap(array, min, max);
  }
  if (array[mid] < array[max]) {
    swap(array, mid, max);
  }

  return array[max];
}

function partition<T = any>(array: T[], pivot: T, min: number, max: number) {
  let left = min;
  let right = min;
  let upper = max;

  while (right <= upper) {
    if (array[right] < pivot) {
      swap(array, left, right);
      left++;
      right++;
    } else if (array[right] > pivot) {
      swap(array, right, upper);
      upper--;
    } else {
      right++;
    }
  }
  return [left, right];
}

function swap(array: any[], ai: number, bi: number) {
  const a = array[ai];
  array[ai] = array[bi];
  array[bi] = a;
}
