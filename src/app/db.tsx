// utils/db.ts
import Dexie from "dexie";
import { Pokemon } from "../types";

// テーブルのデータ型を定義

class MyDatabase extends Dexie {
  public items: Dexie.Table<Pokemon, number>;

  public constructor() {
    super("Pokemon");
    this.version(1).stores({
      items: "++personalId, name, level, berry, ingredients, nature, mainSkill, mainSkillLevel, subSkill",
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
export const updateItem = async (id: number, Pokemon: Pokemon): Promise<number> => {
  console.log(id, Pokemon);
  console.log("終了確認");
  return await db.items.update(id, Pokemon);
  // return db.items.update(id, { Pokemon });
};
