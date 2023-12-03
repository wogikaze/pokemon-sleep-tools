import { Pokemon } from "../types";
import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";

export function MainSkillEdit(props: { open: boolean; onClose: () => void; pokemon: Pokemon }) {
  const [level, setLevel] = useState(props.pokemon.mainSkillLevel);

  async function onClickItem() {
    if (level >= 1 && level <= 6) props.pokemon.mainSkillLevel = level;
    close();
  }
  function close() {
    setLevel(1);
    props.onClose();
  }
  return (
    <>
      <Dialog open={props.open} keepMounted onClose={props.onClose}>
        <DialogTitle>メインスキルのレベルを変更する</DialogTitle>
        <DialogContent>
          <DialogContentText>選択されたポケモン：{props.pokemon.name}</DialogContentText>

          <div className="flex">
            <DialogContentText>現在のメインスキル：{props.pokemon.mainSkill}</DialogContentText>
            <DialogContentText>Lv.{props.pokemon.mainSkillLevel}</DialogContentText>
          </div>
          <TextField autoFocus margin="dense" id="level" label="レベル" type="" value={level} onChange={(e) => setLevel(e.target.value)} fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose}>キャンセル</Button>
          <Button onClick={onClickItem}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
