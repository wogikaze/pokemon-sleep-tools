import { Pokemon } from "../types";
import React, { useEffect, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";

export function MainSkillEdit(props: { open: boolean; onClose: () => void; pokemon: Pokemon }) {
  const [level, setLevel] = useState<string>(props.pokemon.mainSkillLevel.toString());
  const handleChange = (value: string) => {
    const parsed = parseInt(value, 10);
    if (Number.isNaN(parsed)) {
      return "";
    }
    return parsed;
  };
  useEffect(() => {
    setLevel(props.pokemon.mainSkillLevel.toString());
  }, [props]);
  async function onClickItem() {
    const parsed = parseInt(level, 10);
    if (parsed >= 1 && parsed <= 6) props.pokemon.mainSkillLevel = parsed;
    close();
  }
  function close() {
    setLevel("1");
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
          <TextField autoFocus margin="dense" id="level" label="レベル" type="" value={level} onChange={(e) => handleChange(e.target.value)} fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose}>キャンセル</Button>
          <Button onClick={onClickItem}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
