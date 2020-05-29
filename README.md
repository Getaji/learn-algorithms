learn-algorithms
====

[![codecov](https://codecov.io/gh/Getaji/learn-algorithms/branch/master/graph/badge.svg?token=JPV8JM7TXT)](https://codecov.io/gh/Getaji/learn-algorithms)
![CI](https://github.com/Getaji/learn-algorithms/workflows/CI/badge.svg)

並び替え・探索などのアルゴリズムを実装作業を通して学習し、なおかつ実装したコードを管理することで今後に役立てることを期待する。

## 運用

以下の運用方針は変更される可能性がある。

- 実装予定は Issue で管理する
- `src` フォルダに `sort` や `search` などのカテゴリ別フォルダを作り、その中にアルゴリズムごとの実装を JavaScript ファイルで作成する
- ファイル名はキャメルケースにする
- スクリプトは単一の関数を CommonJS Modules 形式でエクスポートする
- なるべく ECMAScript 2015 (ES6) で定義されている機能を用いる。つまり、IEを除いた一般的なブラウザの最新版で動作するようにする
- 実装にあたり、速度よりも安定性と可読性を重視する
- 最適化の際に可読性が失われる場合、ファイル名に `Optimized` を付与した別のファイルを作成する
- テストは Jest を用いて、なるべくすべての実装に対応する
- 実行環境は Node.js 14 系を用いる
