"use client";
import React, { useState, useEffect } from "react";
import { PokemonTable } from "../PokemonTable";
import { defaultpokemon } from "../pokemonlist";

const Home = () => {
  const options: Object = {
    filterType: "checkbox",
    rowsPerPage: 1000,
  };
  return (
    <div className="mx-4 my-4">
      <h1 className="text-3xl my-4">ポケモンのリスト</h1>
      <div className="pt-8 text-base font-semibold leading-7">
        <a href="../" className="text-sky-500 hover:text-sky-600 my-2">
          トップに戻る &rarr;
        </a>
      </div>
      <PokemonTable pokemons={defaultpokemon} sample={true}></PokemonTable>
    </div>
  );
};

export default Home;
