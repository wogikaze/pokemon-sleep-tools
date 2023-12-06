// utils/db.ts
import Dexie from 'dexie';

// テーブルのデータ型を定義
export interface Item {
  id?: number;
  name: string;
  description: string;
}

class MyDatabase extends Dexie {
  public items: Dexie.Table<Item, number>;

  public constructor() {
    super('MyDatabase');
    this.version(1).stores({
      items: '++id, name, description',
    });

    // テーブルをDexieに紐付ける
    this.items = this.table("items");
  }
}

const db = new MyDatabase();
export default db;
// utils/db.ts の続き
export const addItem = async (name: string, description: string): Promise<number> => {
  return db.items.add({ name, description });
};

// utils/db.ts の続き

export const removeItem = async (id: number): Promise<void> => {
  return db.items.delete(id);
};

export const getAllItems = async (): Promise<Item[]> => {
  return db.items.toArray();
};

export const updateItem = async (id: number, name: string, description: string): Promise<number> => {
  return db.items.update(id, { name, description });
};
