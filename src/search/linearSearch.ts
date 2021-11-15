/**
 * 線形探索 (Linear search)
 * ====
 *
 * - リストや配列に入ったデータに対する検索を行うにあたって、 先頭から順に比較を行い、それが見つかれば終了する。
 * - n個のデータからm個のデータを検索する場合、時間計算量は O(nm) 、空間計算量は O(1) である。
 *
 * [シェーカーソート - Wikipedia](https://ja.wikipedia.org/wiki/%E3%82%B7%E3%82%A7%E3%83%BC%E3%82%AB%E3%83%BC%E3%82%BD%E3%83%BC%E3%83%88)
 *
 * @return 見つかったデータのインデックス(存在しない場合は-1)
 */
export default function linearSearch(array: any[], value: any) {
  const len = array.length;

  for (let i = 0; i < len; i++) if (array[i] == value) return i;

  return -1;
}
