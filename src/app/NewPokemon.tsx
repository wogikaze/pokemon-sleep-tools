import { TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, List, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Pokemon, Berry, Ingredients, PokemonNature, MainSkill, SubSkill, PokemonNames, IngredientsNames, SubSkiillNames, PokemonNatures } from "../types";
import Select from "react-select";
import { defaultpokemon } from "./pokemonlist";

export function NewPokemon(props: { open: boolean; onClose: () => void; setPokemon: (pokemon: Pokemon) => void; buildId: number }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [pokemon, setPokemon] = useState<string>("");
  const [level, setLevel] = useState<number>(1);
  const [ing1, setIng1] = useState<Ingredients>("設定なし");
  const [ing2, setIng2] = useState<Ingredients>("設定なし");
  const [ing3, setIng3] = useState<Ingredients>("設定なし");
  const [nature, setNature] = useState<PokemonNature>("いじっぱり");
  const [mainSkillLevel, setMainSkillLevel] = useState(1);
  const [sub1, setSub1] = useState<SubSkill>("設定なし");
  const [sub2, setSub2] = useState<SubSkill>("設定なし");
  const [sub3, setSub3] = useState<SubSkill>("設定なし");
  const [sub4, setSub4] = useState<SubSkill>("設定なし");
  const [sub5, setSub5] = useState<SubSkill>("設定なし");

  function onClickItem() {
    const newPokemon: Pokemon = {
      personalId: props.buildId,
      name: pokemon,
      level: level,
      berry: defaultpokemon.filter((p) => p.name === pokemon)[0].berry,
      ingredients: [ing1, ing2, ing3],
      nature: nature,
      mainSkill: defaultpokemon.filter((p) => p.name === pokemon)[0].mainSkill,
      mainSkillLevel: mainSkillLevel,
      subSkill: [sub1, sub2, sub3, sub4, sub5],
    };
    props.setPokemon(newPokemon);
    props.onClose();
  }
  const names = PokemonNames.map((name) => {
    return { value: name, label: name };
  });
  const ingredients =
    pokemon === ""
      ? IngredientsNames.map((ing: Ingredients) => {
          return { value: ing, label: ing };
        })
      : defaultpokemon
          .filter((p) => p.name === pokemon)[0]
          .ingredients.map((ing) => {
            return { value: ing, label: ing };
          });
  const subskills = SubSkiillNames.map((sub: SubSkill) => {
    return { value: sub, label: sub };
  });
  const natures = PokemonNatures.map((nature: PokemonNature) => {
    return { value: nature, label: nature };
  });

  return (
    <>
      <Dialog open={props.open} keepMounted onClose={props.onClose} fullScreen={fullScreen} maxWidth={"xl"} className={"dialog-new-pokemon"}>
        <DialogTitle>ポケモンを新規登録する</DialogTitle>
        <DialogContent style={{ height: "560px" }}>
          <Grid container spacing={2} direction="row" justifyContent="center" alignItems="stretch">
            <Grid item xs={12} sm={6}>
              <DialogContentText>ポケモンの名前</DialogContentText>
              <List>
                <Select options={names} onChange={(e) => setPokemon(e ? e.value : "")}></Select>
              </List>
            </Grid>
            <Grid item xs={12} sm={6}>
              <DialogContentText>性格</DialogContentText>
              <List>
                <Select options={natures} onChange={(e) => setNature(e ? e.value : "いじっぱり")}></Select>
              </List>
            </Grid>
            <Grid item xs={12} sm={6}>
              <DialogContentText>食材</DialogContentText>
              <List>
                <Select options={pokemon ? ingredients.slice(0, 1) : ingredients} onChange={(e) => setIng1(e ? e.value : "設定なし")}></Select>
                <Select options={pokemon ? ingredients.slice(0, 2) : ingredients} onChange={(e) => setIng2(e ? e.value : "設定なし")}></Select>
                <Select options={pokemon ? ingredients.slice(0, 3) : ingredients} onChange={(e) => setIng3(e ? e.value : "設定なし")}></Select>
              </List>
            </Grid>
            <Grid item xs={12} sm={6}>
              <DialogContentText>サブスキル</DialogContentText>
              <List>
                <Select options={subskills} onChange={(e) => setSub1(e ? e.value : "設定なし")}></Select>
                <Select options={subskills} onChange={(e) => setSub2(e ? e.value : "設定なし")}></Select>
                <Select options={subskills} onChange={(e) => setSub3(e ? e.value : "設定なし")}></Select>
                <Select options={subskills} onChange={(e) => setSub4(e ? e.value : "設定なし")}></Select>
                <Select options={subskills} onChange={(e) => setSub5(e ? e.value : "設定なし")}></Select>
              </List>
            </Grid>
            <Grid item xs={12} sm={6}>
              <DialogContentText>レベル</DialogContentText>
              <TextField value={level} onChange={(e) => setLevel(parseInt(e.target.value))}></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <DialogContentText>メインスキルレベル</DialogContentText>
              <TextField value={mainSkillLevel} onChange={(e) => setMainSkillLevel(parseInt(e.target.value))}></TextField>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose}>Cancel</Button>
          <Button onClick={onClickItem} disabled={pokemon === ""}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
