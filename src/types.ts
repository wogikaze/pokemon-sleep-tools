export type PokemonNature = "さみしがり" | "いじっぱり" | "やんちゃ" | "ゆうかん" | "ずぶとい" | "わんぱく" | "のうてんき" | "のんき" | "ひかえめ" | "おっとり" | "うっかりや" | "れいせい" | "おだやか" | "おとなしい" | "しんちょう" | "なまいき" | "おくびょう" | "せっかち" | "ようき" | "むじゃき" | "てれや" | "がんばりや" | "すなお" | "きまぐれ" | "まじめ";
export type MainSkill = "食材ゲットS" | "げんきチャージS" | "エナジーチャージS(ランダム)" | "エナジーチャージS" | "ゆめのかけらゲットS(ランダム)" | "げんきエールS" | "ゆびをふる" | "げんきオールS" | "ゆめのかけらゲットS" | "おてつだいサポートS" | "料理パワーアップS" | "エナジーチャージM";
export type SubSkill = SubSkill_gold | SubSkill_blue | SubSkill_white;
export type SubSkill_gold = "おてつだいボーナス" | "げんき回復ボーナス" | "睡眠EXPボーナス" | "リサーチEXPボーナス" | "ゆめのかけらボーナス" | "食材の数S" | "スキルレベルアップM";
export type SubSkill_blue = "おてつだいスピードM" | "食材確率アップM" | "スキル確率アップM" | "最大所持数アップM" | "最大所持数アップL" | "スキルレベルアップS";
export type SubSkill_white = "おてつだいスピードS" | "食材確率アップS" | "スキル確率アップS" | "最大所持数アップS";
export type Berry = "キーのみ" | "ヒメリのみ" | "オレンのみ" | "ウブのみ" | "ドリのみ" | "チーゴのみ" | "クラボのみ" | "カゴのみ" | "フィラのみ" | "シーヤのみ" | "マゴのみ" | "ラムのみ" | "オボンのみ" | "ブリーのみ" | "ヤチェのみ" | "ウイのみ" | "ベリブのみ" | "モモンのみ";
export type Ingredients = "とくせんリンゴ" | "モーモーミルク" | "ワカクサ大豆" | "あまいミツ" | "マメミート" | "あったかジンジャー" | "あんみんトマト" | "とくせんエッグ" | "ピュアなオイル" | "ほっこりポテト" | "げきからハーブ" | "リラックスカカオ" | "あじわいキノコ" | "ふといながねぎ" | "おいしいシッポ";
export type Pokemon = {
  personalId: number;
  name: string;
  level: number;
  berry: Berry;
  ingredients: Ingredients[];
  nature: PokemonNature;
  mainSkill: MainSkill;
  subSkill: SubSkill[];
};
