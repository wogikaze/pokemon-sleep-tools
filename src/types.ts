export type PokemonNature = "さみしがり" | "いじっぱり" | "やんちゃ" | "ゆうかん" | "ずぶとい" | "わんぱく" | "のうてんき" | "のんき" | "ひかえめ" | "おっとり" | "うっかりや" | "れいせい" | "おだやか" | "おとなしい" | "しんちょう" | "なまいき" | "おくびょう" | "せっかち" | "ようき" | "むじゃき" | "てれや" | "がんばりや" | "すなお" | "きまぐれ" | "まじめ";
export type MainSkill = "食材ゲットS" | "げんきチャージS" | "エナジーチャージS(ランダム)" | "エナジーチャージS" | "ゆめのかけらゲットS(ランダム)" | "げんきエールS" | "ゆびをふる" | "げんきオールS" | "ゆめのかけらゲットS" | "おてつだいサポートS" | "料理パワーアップS" | "エナジーチャージM";
export type SubSkill = "設定なし" | SubSkill_gold | SubSkill_blue | SubSkill_white;
export type SubSkill_gold = "おてつだいボーナス" | "げんき回復ボーナス" | "睡眠EXPボーナス" | "リサーチEXPボーナス" | "ゆめのかけらボーナス" | "食材の数S" | "スキルレベルアップM";
export type SubSkill_blue = "おてつだいスピードM" | "食材確率アップM" | "スキル確率アップM" | "最大所持数アップM" | "最大所持数アップL" | "スキルレベルアップS";
export type SubSkill_white = "おてつだいスピードS" | "食材確率アップS" | "スキル確率アップS" | "最大所持数アップS";
export type Berry = "キーのみ" | "ヒメリのみ" | "オレンのみ" | "ウブのみ" | "ドリのみ" | "チーゴのみ" | "クラボのみ" | "カゴのみ" | "フィラのみ" | "シーヤのみ" | "マゴのみ" | "ラムのみ" | "オボンのみ" | "ブリーのみ" | "ヤチェのみ" | "ウイのみ" | "ベリブのみ" | "モモンのみ" | "設定なし";
export type Ingredients = "設定なし" | "とくせんリンゴ" | "モーモーミルク" | "ワカクサ大豆" | "あまいミツ" | "マメミート" | "あったかジンジャー" | "あんみんトマト" | "とくせんエッグ" | "ピュアなオイル" | "ほっこりポテト" | "げきからハーブ" | "リラックスカカオ" | "あじわいキノコ" | "ふといながねぎ" | "おいしいシッポ";
export type Pokemon = {
  personalId: number;
  name: string;
  level: number;
  berry: Berry;
  ingredients: Ingredients[];
  nature: PokemonNature;
  mainSkill: MainSkill;
  mainSkillLevel: number;
  subSkill: SubSkill[];
};
export const PokemonNames = [
  "フシギダネ",
  "フシギソウ",
  "フシギバナ",
  "ヒトカゲ",
  "リザード",
  "リザードン",
  "ゼニガメ",
  "カメール",
  "カメックス",
  "キャタピー",
  "トランセル",
  "バタフリー",
  "コラッタ",
  "ラッタ",
  "アーボ",
  "アーボック",
  "ピカチュウ",
  "ピカチュウ",
  "ライチュウ",
  "ピッピ",
  "ピクシー",
  "プリン",
  "プクリン",
  "ディグダ",
  "ダグトリオ",
  "ニャース",
  "ペルシアン",
  "コダック",
  "ゴルダック",
  "マンキー",
  "オコリザル",
  "ガーディ",
  "ウインディ",
  "マダツボミ",
  "ウツドン",
  "ウツボット",
  "イシツブテ",
  "ゴローン",
  "ゴローニャ",
  "ヤドン",
  "ヤドラン",
  "コイル",
  "レアコイル",
  "ドードー",
  "ドードリオ",
  "ゴース",
  "ゴースト",
  "ゲンガー",
  "イワーク",
  "カラカラ",
  "ガラガラ",
  "ガルーラ",
  "バリヤード",
  "カイロス",
  "メタモン",
  "イーブイ",
  "シャワーズ",
  "サンダース",
  "ブースター",
  "チコリータ",
  "ベイリーフ",
  "メガニウム",
  "ヒノアラシ",
  "マグマラシ",
  "バクフーン",
  "ワニノコ",
  "アリゲイツ",
  "オーダイル",
  "ピチュー",
  "ピィ",
  "ププリン",
  "トゲピー",
  "トゲチック",
  "メリープ",
  "モココ",
  "デンリュウ",
  "ウソッキー",
  "エーフィ",
  "ブラッキー",
  "ヤドキング",
  "ソーナンス",
  "ハガネール",
  "ヘラクロス",
  "デルビル",
  "ヘルガー",
  "ヨーギラス",
  "サナギラス",
  "バンギラス",
  "ナマケロ",
  "ヤルキモノ",
  "ケッキング",
  "ヤミラミ",
  "ゴクリン",
  "マルノーム",
  "チルット",
  "チルタリス",
  "カゲボウズ",
  "カゲボウズ",
  "アブソル",
  "ソーナノ",
  "タマザラシ",
  "トドグラー",
  "トドゼルガ",
  "ウソハチ",
  "マネネ",
  "リオル",
  "ルカリオ",
  "グレッグル",
  "ドクロッグ",
  "ジバコイル",
  "トゲキッス",
  "リーフィア",
  "グレイシア",
  "ニンフィア",
];
export const PokemonNatures: PokemonNature[] = ["さみしがり", "いじっぱり", "やんちゃ", "ゆうかん", "ずぶとい", "わんぱく", "のうてんき", "のんき", "ひかえめ", "おっとり", "うっかりや", "れいせい", "おだやか", "おとなしい", "しんちょう", "なまいき", "おくびょう", "せっかち", "ようき", "むじゃき", "てれや", "がんばりや", "すなお", "きまぐれ", "まじめ"];
export const IngredientsNames: Ingredients[] = ["設定なし", "とくせんリンゴ", "モーモーミルク", "ワカクサ大豆", "あまいミツ", "マメミート", "あったかジンジャー", "あんみんトマト", "とくせんエッグ", "ピュアなオイル", "ほっこりポテト", "げきからハーブ", "リラックスカカオ", "あじわいキノコ", "ふといながねぎ", "おいしいシッポ"];
export const BerryNames = ["キーのみ", "ヒメリのみ", "オレンのみ", "ウブのみ", "ドリのみ", "チーゴのみ", "クラボのみ", "カゴのみ", "フィラのみ", "シーヤのみ", "マゴのみ", "ラムのみ", "オボンのみ", "ブリーのみ", "ヤチェのみ", "ウイのみ", "ベリブのみ", "モモンのみ", "設定なし"];
export const SubSkiillNames: SubSkill[] = [
  "設定なし",
  "おてつだいボーナス",
  "げんき回復ボーナス",
  "睡眠EXPボーナス",
  "リサーチEXPボーナス",
  "ゆめのかけらボーナス",
  "食材の数S",
  "スキルレベルアップM",
  "おてつだいスピードM",
  "食材確率アップM",
  "スキル確率アップM",
  "最大所持数アップM",
  "最大所持数アップL",
  "スキルレベルアップS",
  "おてつだいスピードS",
  "食材確率アップS",
  "スキル確率アップS",
  "最大所持数アップS",
];
