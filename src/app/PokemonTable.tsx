import { Pokemon } from "@/types";
import { LevelEdit } from "./levelEdit";
import Image from "next/image";
import MUIDataTable from "mui-datatables";
import { IngredientEdit } from "./IngredientEdit";
import { NatureEdit } from "./NatureEdit";
import { MainSkillEdit } from "./MainSkillEdit";
import { SubSkillEdit } from "./SubSkillEdit";
import { useState, useEffect } from "react";
import { addItem, getAllItems, removeItem, updateItem } from "./db";
import { off } from "process";

export function PokemonTable(props: { pokemons: Pokemon[]; sample?: boolean; deleteFunction: (arg: number) => void }) {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const [personalId, setPersonalId] = useState(0);
  const [isOpenLevelEdit, setIsOpenLevelEdit] = useState(false);
  const [isOpenNatureEdit, setIsOpenNatureEdit] = useState(false);
  const [isOpenIngredientsEdit, setIsOpenIngredientsEdit] = useState(false);
  const [isOpenMainSkillEdit, setIsOpenMainSkillEdit] = useState(false);
  const [isOpenSubSkillEdit, setIsopenSubSkillEdit] = useState(false);

  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>();
  const isOpenEditMenu = isOpenLevelEdit || isOpenNatureEdit || isOpenIngredientsEdit || isOpenMainSkillEdit || isOpenSubSkillEdit;

  useEffect(() => {
    setSelectedPokemon(props.pokemons[pokemonIndex]);
    const id = props.pokemons[pokemonIndex]?.personalId;
    if (id !== undefined) {
      setPersonalId(id);
    }
  }, [pokemonIndex, props.pokemons]);

  function openLevelEdit(index: number) {
    setPokemonIndex(index);
    setIsOpenLevelEdit(true);
  }
  async function closeLevelEdit() {
    setIsOpenLevelEdit(false);
    await updateItem(personalId, props.pokemons[pokemonIndex]);
  }
  function openIngredientsEdit(index: number) {
    setPokemonIndex(index);
    setTimeout(() => {
      setIsOpenIngredientsEdit(true);
    }, 20);
  }
  async function closeIngredientsEdit() {
    setIsOpenIngredientsEdit(false);
    await updateItem(personalId, props.pokemons[pokemonIndex]);
  }
  function openNatureEdit(index: number) {
    setPokemonIndex(index);
    setIsOpenNatureEdit(true);
  }
  async function closeNatureEdit() {
    setIsOpenNatureEdit(false);
    await updateItem(personalId, props.pokemons[pokemonIndex]);
  }
  function openMainSkillEdit(index: number) {
    setPokemonIndex(index);
    setIsOpenMainSkillEdit(true);
  }
  async function closeMainSkillEdit() {
    setIsOpenMainSkillEdit(false);
    await updateItem(personalId, props.pokemons[pokemonIndex]);
  }
  function openSubSkillEdit(index: number) {
    setPokemonIndex(index);
    setIsopenSubSkillEdit(true);
  }
  async function closeSubSkillEdit() {
    setIsopenSubSkillEdit(false);
    await updateItem(personalId, props.pokemons[pokemonIndex]);
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
              <div className="grow align-middle whitespace-nowrap">{props.pokemons[dataIndex].name}</div>
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
        display: !props.sample,
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
            <div className="flex" onClick={() => openIngredientsEdit(dataIndex)}>
              {props.pokemons[dataIndex].ingredients.map((ingredient, i) => {
                return <Image src={"/" + ingredient + ".png"} key={i} alt={ingredient} title={ingredient} width={25} height={25} loading="lazy"></Image>;
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
        filter: !props.sample,
        sort: true,
        display: !props.sample,
        customBodyRenderLite: (dataIndex: number) => {
          return (
            <>
              <div onClick={() => openNatureEdit(dataIndex)} className="whitespace-nowrap">
                {props.pokemons[dataIndex].nature}
              </div>
            </>
          );
        },
      },
    },
    {
      name: "mainSkill",
      label: "メインスキル",
      options: {
        filter: true,
        sort: true,
        customBodyRenderLite: (dataIndex: number) => {
          return (
            <>
              <div onClick={() => openMainSkillEdit(dataIndex)} className="whitespace-nowrap flex content-between">
                <div>{props.pokemons[dataIndex].mainSkill}</div>
                {!props.sample && <div className="pl-4">Lv.{props.pokemons[dataIndex].mainSkillLevel}</div>}
              </div>
            </>
          );
        },
      },
    },
    {
      name: "subSkill",
      label: "サブスキル",
      options: {
        filter: !props.sample,
        sort: !props.sample,
        display: !props.sample,
        customBodyRenderLite: (dataIndex: number) => {
          const subSkills = props.pokemons[dataIndex].subSkill;
          const subSkilldiv = subSkills.map((subSkill, i) => {
            if (["おてつだいボーナス", "げんき回復ボーナス", "睡眠EXPボーナス", "リサーチEXPボーナス", "ゆめのかけらボーナス", "食材の数S", "スキルレベルアップM"].some((e) => e === subSkill)) {
              return (
                <div key={i} className="bg-yellow-100 border-2 border-yellow-500 text-amber-900 py-1 px-8 rounded shadow-md hover:bg-yellow-200 font-bold min-w-[200px] whitespace-nowrap text-center" onClick={() => openSubSkillEdit(dataIndex)}>
                  {subSkill}
                </div>
              );
            } else if (["おてつだいスピードM", "食材確率アップM", "スキル確率アップM", "最大所持数アップM", "最大所持数アップL", "スキルレベルアップS"].some((e) => e === subSkill)) {
              return (
                <div key={i} className="bg-blue-100 border-2 border-blue-500 text-gray-500 py-1 px-8 rounded shadow-md hover:bg-blue-200 font-bold min-w-[200px] whitespace-nowrap text-center" onClick={() => openSubSkillEdit(dataIndex)}>
                  {subSkill}
                </div>
              );
            } else if (subSkill !== undefined) {
              return (
                <div key={i} className="bg-gray-100 border-2 border-gray-500 text-stone-500 py-1 px-8 rounded shadow-md hover:bg-gray-300 font-bold min-w-[200px] whitespace-nowrap text-center" onClick={() => openSubSkillEdit(dataIndex)}>
                  {subSkill}
                </div>
              );
            }
          });
          return <div>{subSkilldiv}</div>;
        },
      },
    },
  ];

  const options: Object = {
    filterType: "checkbox",
    sortOrder: { name: "personalId" as any, direction: "asc" as any },
    download: false,
    print: false,
    tableId: "1",
    onRowsDelete: async (e: any) => {
      console.log(e);
      e.data.forEach(async (ele: any) => {
        const personalId = props.pokemons[ele.dataIndex].personalId;
        if (personalId !== undefined) {
          props.deleteFunction(personalId);
        }
      });
    },
    rowsPerPage: props.sample ? 200 : 100,
    rowsPerPageOptions: props.sample ? [10, 15, 100, 200] : [10, 15, 100],
  };
  return (
    <div>
      <MUIDataTable title={""} data={props.pokemons} columns={columns} options={options} />
      {selectedPokemon != undefined && isOpenEditMenu && (
        <div>
          <LevelEdit open={isOpenLevelEdit} onClose={closeLevelEdit} pokemon={selectedPokemon!} />
          <NatureEdit open={isOpenNatureEdit} onClose={closeNatureEdit} pokemon={selectedPokemon!} />
          <IngredientEdit open={isOpenIngredientsEdit} onClose={closeIngredientsEdit} pokemon={selectedPokemon!} />
          <MainSkillEdit open={isOpenMainSkillEdit} onClose={closeMainSkillEdit} pokemon={selectedPokemon!} />
          <SubSkillEdit open={isOpenSubSkillEdit} onClose={closeSubSkillEdit} pokemon={selectedPokemon!} />
        </div>
      )}
    </div>
  );
}
