import { Pokemon } from "../types";
import React, { useEffect, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { PasswordRounded } from "@mui/icons-material";

export function LevelEdit(props: { open: boolean; onClose: () => void; pokemon: Pokemon }) {
  const [level, setLevel] = useState<string>(props.pokemon.level.toString());
  const handleChange = (value: string) => {
    const parsed = parseInt(value, 10);
    if (Number.isNaN(parsed)) {
      return "";
    }
    return parsed;
  };
  useEffect(() => {
    setLevel(props.pokemon.level.toString());
  }, [props]);
  async function onClickItem() {
    const parsed = parseInt(level, 10);
    if (parsed >= 1) props.pokemon.level = parsed;
    close();
  }
  function close() {
    setLevel("1");
    props.onClose();
  }
  return (
    <>
      <Dialog open={props.open} keepMounted onClose={props.onClose}>
        <DialogTitle>レベルを変更する</DialogTitle>
        <DialogContent>
          <DialogContentText>選択されたポケモン：{props.pokemon.name}</DialogContentText>
          <DialogContentText>現在のレベル：{props.pokemon.level}</DialogContentText>
          <TextField autoFocus margin="dense" id="level" label="レベル" type="" value={handleChange(level)} onChange={(e) => setLevel(e.target.value)} fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose}>キャンセル</Button>
          <Button onClick={onClickItem}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
