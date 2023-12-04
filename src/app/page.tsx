"use client";
import { useState, useEffect } from "react";
import { Pokemon } from "../types";
import { NewPokemon } from "./NewPokemon";
import { PokemonTable } from "./PokemonTable";
import { addItem, getAllItems } from "./db";

function MyApp() {
  const [PokemonList, setPokemonList] = useState<Pokemon[]>([]);

  const fetchData = async () => {
    const data = await getAllItems();
    console.log(data)
    setPokemonList(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const [isOpenNewPokemonScreen, setIsOpenNewPokemonScreen] = useState(false);
  const handleClickOpenNewPokemon = () => {
    setIsOpenNewPokemonScreen(true);
  };

  const handleCloseNewPokemon = () => {
    setIsOpenNewPokemonScreen(false);
  };
  const addPokemon = async (newPokemon: Pokemon) => {
    console.log(newPokemon);
    await setPokemonList([...PokemonList, newPokemon]);
    addItem(newPokemon);
  };
  return (
    <div className="min-h px-7">
      <h1 className="text-3xl my-4">ポケモンスリープ編成管理</h1>
      <div className="pt-8 text-base font-semibold leading-7">
        <a href="/sample" className="text-sky-500 hover:text-sky-600 my-2">
          サンプル &rarr;
        </a>
      </div>
      <div className="mt-7 flex my-2">
        <div className="grid gap-3 w-full sm:inline-flex" onClick={handleClickOpenNewPokemon}>
          <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
            ポケモンを追加
          </a>
        </div>
        <div className="grid gap-3 w-full sm:inline-flex flex-row-reverse">
          <a className=" py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-400 text-white hover:bg-red-500 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#" onClick={() => setPokemonList([])}>
            クリア
          </a>
        </div>
      </div>

      {isOpenNewPokemonScreen && <NewPokemon open={isOpenNewPokemonScreen} onClose={handleCloseNewPokemon} setPokemon={addPokemon} buildId={1} />}
      <PokemonTable pokemons={PokemonList}></PokemonTable>
    </div>
  );
}

export default MyApp;
