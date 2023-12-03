// utils/db.ts
import Dexie from "dexie";
import { Pokemon } from "../types";

// テーブルのデータ型を定義

class MyDatabase extends Dexie {
  public items: Dexie.Table<Pokemon, number>;

  public constructor() {
    super("Pokemon");
    this.version(1).stores({
      items: "++id, name, level, berry, ingredients, nature, mainSkill, mainSkillLevel, subSkill",
    });

    // テーブルをDexieに紐付ける
    this.items = this.table("items");
  }
}

const db = new MyDatabase();
export default db;

export const addItem = async (Pokemon: Pokemon): Promise<number> => {
  return db.items.add(Pokemon);
};

export const getAllItems = async (): Promise<Pokemon[]> => {
  return db.items.toArray();
};
export const removeItem = async (id: number): Promise<void> => {
  return db.items.delete(id);
};
