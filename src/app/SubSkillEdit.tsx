import { Pokemon, SubSkill, SubSkiillNames, Ingredients } from "../types";
import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Select, MenuItem } from "@mui/material";

export function SubSkillEdit(props: { open: boolean; onClose: () => void; pokemon: Pokemon }) {
  const [sub1, setSub1] = useState<SubSkill>(props.pokemon.subSkill[0]);
  const [sub2, setSub2] = useState<SubSkill>(props.pokemon.subSkill[1]);
  const [sub3, setSub3] = useState<SubSkill>(props.pokemon.subSkill[2]);
  const [sub4, setSub4] = useState<SubSkill>(props.pokemon.subSkill[3]);
  const [sub5, setSub5] = useState<SubSkill>(props.pokemon.subSkill[4]);

  async function onClickItem() {
    props.pokemon.subSkill[0] = sub1;
    props.pokemon.subSkill[1] = sub2;
    props.pokemon.subSkill[2] = sub3;
    props.pokemon.subSkill[3] = sub4;
    props.pokemon.subSkill[4] = sub5;
    close();
  }
  function close() {
    props.onClose();
  }
  const set = [
    [sub1, setSub1],
    [sub2, setSub2],
    [sub3, setSub3],
    [sub4, setSub4],
    [sub5, setSub5],
  ];
  return (
    <>
      <Dialog open={props.open} keepMounted onClose={props.onClose}>
        <DialogTitle>サブスキルを変更する</DialogTitle>
        <DialogContent>
          <DialogContentText>選択されたポケモン：{props.pokemon.name}</DialogContentText>
          <div>
            {[sub1, sub2, sub3, sub4, sub5].map((sub, index) => {
              const setSub = [setSub1, setSub2, setSub3, setSub4, setSub5][index];

              return (
                <Select key={index} value={sub} onChange={(e) => setSub(e.target.value as SubSkill)}>
                  {SubSkiillNames.map((name, nameIndex) => (
                    <MenuItem key={nameIndex} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              );
            })}
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
