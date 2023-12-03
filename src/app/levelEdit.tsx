import { Pokemon } from "../types";
import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";

export function LevelEdit(props: { open: boolean; onClose: () => void; pokemon: Pokemon }) {
  const [level, setLevel] = useState(props.pokemon.level);

  async function onClickItem() {
    if (level >= 1) props.pokemon.level = level;
    close();
  }
  function close() {
    setLevel(1);
    props.onClose();
  }
  return (
    <>
      <Dialog open={props.open} keepMounted onClose={props.onClose}>
        <DialogTitle>レベルを変更する</DialogTitle>
        <DialogContent>
          <DialogContentText>選択されたポケモン：{props.pokemon.name}</DialogContentText>
          <DialogContentText>現在のレベル：{props.pokemon.level}</DialogContentText>
          <TextField autoFocus margin="dense" id="level" label="レベル" type="" value={level} onChange={(e) => setLevel(parseInt(e.target.value))} fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose}>キャンセル</Button>
          <Button onClick={onClickItem}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
