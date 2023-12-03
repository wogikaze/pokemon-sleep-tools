import { Pokemon } from "../types";
import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Select, MenuItem } from "@mui/material";

export function SubSkillEdit(props: { open: boolean; onClose: () => void; pokemon: Pokemon }) {
  const [sub1, setSub1] = useState(props.pokemon.subSkill[0]);
  const [sub2, setSub2] = useState(props.pokemon.subSkill[1]);
  const [sub3, setSub3] = useState(props.pokemon.subSkill[2]);
  const [sub4, setSub4] = useState(props.pokemon.subSkill[3]);
  const [sub5, setSub5] = useState(props.pokemon.subSkill[4]);

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
  return (
    <>
      <Dialog open={props.open} keepMounted onClose={props.onClose}>
        <DialogTitle>サブスキルを変更する</DialogTitle>
        <DialogContent>
          <DialogContentText>選択されたポケモン：{props.pokemon.name}</DialogContentText>
          {[
            [sub1, setSub1],
            [sub2, setSub2],
            [sub3, setSub3],
            [sub4, setSub4],
            [sub5, setSub5],
          ].map(([sub, setSub], i) => {
            return (
              <Select key={i} labelId="nature-select-label" id="nature-select" value={sub} onChange={(e) => setSub(e.target.value)}>
                {[
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
                ].map((n, i) => {
                  return (
                    <MenuItem key={i} value={n}>
                      {n}
                    </MenuItem>
                  );
                })}
              </Select>
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose}>キャンセル</Button>
          <Button onClick={onClickItem}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
