import { useEffect, useState } from "react";
import { Pokemon } from "../types";
let defaultPokemonList: Pokemon[] = [
  {
    personalId: 0,
    name: "フシギダネ",
    level: 1,
    berry: "ドリのみ",
    ingredients: ["あまいミツ", "あんみんトマト", "ほっこりポテト"],
    nature: "いじっぱり",
    mainSkill: "食材ゲットS",
    mainSkillLevel: 1,
    subSkill: ["スキル確率アップM", "スキル確率アップS", "睡眠EXPボーナス", "設定なし", "設定なし"],
  },
];
const useBuilds = () => {
  const [PokemonList, setPokemonList] = useState<Pokemon[]>(defaultPokemonList);
  useEffect(() => {});

  return { PokemonList, setPokemonList };
};

export default useBuilds;
