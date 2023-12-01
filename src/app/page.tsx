"use client";
import React from "react";
import Image from "next/image";
import MUIDataTable from "mui-datatables";
import { Pokemon } from "../types";
import { defaultpokemon } from "./pokemonlist";

function MyApp() {
  function CustomTable(props: { pokemons: Pokemon[] }) {
    function openNatureEdit(index: number) {}
    function openLevelEdit(index: number) {
      alert("aaaa");
    }
    const columns = [
      {
        name: "personalId",
        label: "ID",
        options: { filter: false, display: false },
      },
      {
        name: "name",
        label: "ポケモン名",
        options: {
          filter: false,
          display: true,
          customBodyRenderLite: (dataIndex: number) => {
            return (
              <div className="flex">
                <div className="grow align-middle">{props.pokemons[dataIndex].name}</div>
                {(() => {
                  let name = props.pokemons[dataIndex].name;
                  return <Image src={"/pokemon/" + name + ".png"} key={name} alt={name} title={name} width={25} height={25} loading="lazy"></Image>;
                })()}
              </div>
            );
          },
        },
      },
      {
        name: "level",
        label: "レベル",
        options: {
          filter: false,
          display: true,
          customBodyRenderLite: (dataIndex: number) => {
            return <div onClick={() => openLevelEdit(dataIndex)}>{props.pokemons[dataIndex].level}</div>;
          },
        },
      },
      {
        name: "berry",
        label: "きのみ",
        options: {
          filter: true,
          display: true,
          customBodyRenderLite: (dataIndex: number) => {
            return (
              <div className="flex">
                {(() => {
                  let berry = props.pokemons[dataIndex].berry;
                  return <Image src={"/" + berry + ".png"} key={berry} alt={berry} title={berry} width={25} height={25} loading="lazy"></Image>;
                })()}
              </div>
            );
          },
        },
      },
      {
        name: "ingredients",
        label: "食材",
        options: {
          filter: true,
          display: true,
          customBodyRenderLite: (dataIndex: number) => {
            return (
              <div className="flex">
                {props.pokemons[dataIndex].ingredients.map((ingredient) => {
                  return <Image src={"/" + ingredient + ".png"} key={ingredient} alt={ingredient} title={ingredient} width={25} height={25} loading="lazy"></Image>;
                })}
              </div>
            );
          },
        },
      },
      {
        name: "nature",
        label: "性格",
        options: {
          filter: true,
          sort: true,
          customBodyRenderLite: (dataIndex: number) => {
            return (
              <>
                <div onClick={() => openNatureEdit(dataIndex)}>{props.pokemons[dataIndex].nature}</div>
              </>
            );
          },
        },
      },
      {
        name: "mainSkill",
        label: "メインスキル",
        options: { filter: true, sort: true },
      },
    ];

    const options = {
      filterType: "checkbox",
      sortOrder: { name: "personalId" as any, direction: "asc" as any },
      download: false,
      print: false,
    };
    return <MUIDataTable title={"ここにテキストを入力"} data={props.pokemons} columns={columns} options={options} />;
  }

  return (
    <div className="min-h-screen px-7">
      <h1 className="text-3xl">Welcome to my app</h1>
      <MyButton />
      <CustomTable pokemons={defaultpokemon}></CustomTable>
    </div>
  );
}

function MyButton() {
  return (
    <div className="mt-7 grid gap-3 w-full sm:inline-flex">
      <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
        Get started
        <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </a>
      <a
        className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        href="#"
      >
        Contact sales team
      </a>
    </div>
  );
}

export default MyApp;
