"use client";

import { defaultpokemon } from "../pokemonlist";
import { PokemonTable } from "../PokemonTable";

function MyApp() {
  return (
    <div className="min-h-screen px-7">
      <h1 className="text-3xl my-4">ポケモンのリスト</h1>
      <div className="pt-8 text-base font-semibold leading-7">
        <p>
          <a href="../" className="text-sky-500 hover:text-sky-600">
            トップに戻る &rarr;
          </a>
        </p>
      </div>
      <div className="mt-7 flex"></div>
      <PokemonTable pokemons={defaultpokemon} sample={true}></PokemonTable>
    </div>
  );
}

export default MyApp;
