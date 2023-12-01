import os
import csv

# CSVファイルのパスを指定
csv_file = "pokemon.csv"

# CSVファイルを読み込み、リネームルールに従ってファイルをリネーム
with open(csv_file, mode="r", encoding="utf-8") as file:
    reader = csv.reader(file)
    for idx, row in enumerate(reader):
        name, id, tokui, berry, ingr1, ingr2, ingr3, ms, fp, time = row
        # フシギダネ,0001,食材,ドリのみ,あまいミツ,あんみんトマト,ほっこりポテト,食材ゲットS,5,4400
        # print(row)
        print(
            f"""
{{
    personalId: {idx},name: "{name}",level: 1,berry: "{berry}",ingredients: ["{ingr1}", "{ingr2}", "{ingr3}"],nature: "いじっぱり",mainSkill: "{ms}",subSkill: ["スキル確率アップM", "スキル確率アップS", "睡眠EXPボーナス"],
}},"""
        )
