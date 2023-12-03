import { Ingredients, Pokemon } from "../types";
import React, { useState } from "react";
import Image from "next/image";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { defaultpokemon } from "./pokemonlist";

export function IngredientEdit(props: { open: boolean; onClose: () => void; pokemon: Pokemon }) {
  const name = props.pokemon.name;
  const [ing1, setIng1] = useState(props.pokemon.ingredients[0]);
  const [ing2, setIng2] = useState(props.pokemon.ingredients[1]);
  const [ing3, setIng3] = useState(props.pokemon.ingredients[2]);

  async function onClickItem() {
    props.pokemon.ingredients = [ing1, ing2, ing3];
    close();
  }
  function close() {
    props.onClose();
  }
  // const ingredients: Ingredients[] = ["とくせんリンゴ", "モーモーミルク", "ワカクサ大豆", "あまいミツ", "マメミート", "あったかジンジャー", "あんみんトマト", "とくせんエッグ", "ピュアなオイル", "ほっこりポテト", "げきからハーブ", "リラックスカカオ", "あじわいキノコ", "ふといながねぎ", "おいしいシッポ"];
  const ingredients = defaultpokemon.filter((poke) => poke.name === name)[0].ingredients;
  console.log(ingredients);
  const SelectIng = ingredients.map((ingredient) => {
    return (
      <MenuItem value={ingredient} key={ingredient}>
        <div className="flex">
          <Image src={"/" + ingredient + ".png"} key={ingredient} alt={ingredient} title={ingredient} width={25} height={25} loading="lazy"></Image>
          {ingredient}
        </div>
      </MenuItem>
    );
  });
  return (
    <>
      <Dialog open={props.open} keepMounted onClose={props.onClose}>
        <DialogTitle>食材を変更する</DialogTitle>
        <DialogContent className="min-w=[600px]">
          <DialogContentText>選択されたポケモン：{props.pokemon.name}</DialogContentText>
          <DialogContentText className="flex">
            現在の食材：
            {props.pokemon.ingredients.map((ingredient, i) => {
              return <Image src={"/" + ingredient + ".png"} key={i} alt={ingredient} title={ingredient} width={25} height={25} loading="lazy"></Image>;
            })}
          </DialogContentText>
          <div className="flex py-4 px-2">
            <FormControl>
              <InputLabel id="ing-1">食材1</InputLabel>
              <Select labelId="ing-1" value={ing1} label="食材" onChange={(e) => setIng1(e.target.value as Ingredients)} fullWidth={true}>
                <MenuItem value={"設定なし"}>設定なし</MenuItem>
                {SelectIng}
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel id="ing-1">食材2</InputLabel>
              <Select labelId="ing-2" value={ing2} label="食材(25lv)" onChange={(e) => setIng2(e.target.value as Ingredients)} fullWidth={true}>
                <MenuItem value={"設定なし"}>設定なし</MenuItem>
                {SelectIng}
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel id="ing-1">食材3</InputLabel>
              <Select labelId="ing-2" value={ing3} label="食材(75lv)" onChange={(e) => setIng3(e.target.value as Ingredients)} fullWidth={true}>
                <MenuItem value={"設定なし"}>設定なし</MenuItem>
                {SelectIng}
              </Select>
            </FormControl>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose}>キャンセル</Button>
          <Button onClick={onClickItem}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
