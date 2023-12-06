// 例えば、pages/removeItem.tsx などで
"use client";
import React, { useState } from "react";
import { addItem, removeItem, updateItem } from "./db";

const RemoveItem = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState<number>(0);

  const handleadd = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await addItem(name, description);
    // 追加後の処理（例: メッセージ表示、ページ遷移など）
  };

  const handleremove = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(id);
    await removeItem(id);
    // 削除後の処理（例: メッセージ表示、ページ遷移など）
  };

  const handleupdate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await updateItem(id, name, description);
    // 更新後の処理（例: メッセージ表示、ページ遷移など）
  };
  return (
    <>
      <form onSubmit={handleadd}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        <button type="submit">Add Item</button>
      </form>

      <form onSubmit={handleremove}>
        <input type="number" value={id} onChange={(e) => setId(Number(e.target.value))} placeholder="Item ID" />
        <button type="submit">Remove Item</button>
      </form>
      <form onSubmit={handleupdate}>
        <input type="number" value={id} onChange={(e) => setId(Number(e.target.value))} placeholder="Item ID" />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        <button type="submit">update Item</button>
      </form>
    </>
  );
};

export default RemoveItem;
