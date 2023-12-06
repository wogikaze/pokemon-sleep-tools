import { Pokemon, PokemonNature } from "../types";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
export function NatureEdit(props: { open: boolean; onClose: () => void; pokemon: Pokemon }) {
  const [nature, setNature] = useState(props.pokemon.nature);
  useEffect(() => {
    setNature(props.pokemon.nature);
  }, [props]);
  async function onClickItem() {
    props.pokemon.nature = nature;
    close();
  }
  function close() {
    props.onClose();
  }
  const natures = ["さみしがり", "いじっぱり", "やんちゃ", "ゆうかん", "ずぶとい", "わんぱく", "のうてんき", "のんき", "ひかえめ", "おっとり", "うっかりや", "れいせい", "おだやか", "おとなしい", "しんちょう", "なまいき", "おくびょう", "せっかち", "ようき", "むじゃき", "てれや", "がんばりや", "すなお", "きまぐれ", "まじめ"];

  return (
    <Dialog open={props.open} onClose={close} maxWidth="xs" fullWidth>
      <DialogTitle>性格を変更する</DialogTitle>
      <DialogContent>
        <DialogContentText>選択されたポケモン：{props.pokemon.name}</DialogContentText>
        <DialogContentText>現在の性格：{props.pokemon.nature}</DialogContentText>
        <FormControl className="my-4">
          <InputLabel id="nature-select-label">性格</InputLabel>
          <Select labelId="nature-select-label" id="nature-select" value={nature} onChange={(e) => setNature(e.target.value as PokemonNature)}>
            {natures.map((n, i) => {
              return (
                <MenuItem key={i} value={n}>
                  {n}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClickItem}>変更</Button>
      </DialogActions>
    </Dialog>
  );
}
