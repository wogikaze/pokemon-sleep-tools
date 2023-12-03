"use client";
import React, { useState, useEffect } from "react";
import { addItem, getAllItems, Item } from "./db";

const Home = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const fetchData = async () => {
    const data = await getAllItems();
    setItems(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await addItem(name, description);
    setName("");
    setDescription("");
    fetchData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.map((item: Item) => (
          <li key={item.id}>
            {item.name}: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
