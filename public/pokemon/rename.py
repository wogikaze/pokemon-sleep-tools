import os
import csv

# 現在のディレクトリのファイル一覧を取得
files = os.listdir(".")

# .webpの拡張子を持つファイルをリネーム
for file in files:
    if file.endswith(".png.webp"):
        new_name = file.replace(".png.webp", ".png")
        os.rename(file, new_name)

# CSVファイルのパスを指定
csv_file = "rename.csv"

# CSVファイルを読み込み、リネームルールに従ってファイルをリネーム
with open(csv_file, mode="r", encoding="utf-8") as file:
    reader = csv.reader(file)
    for row in reader:
        original_name, new_name = row
        print(row)
        if os.path.exists(original_name[1:] + ".png"):
            os.rename(original_name[1:] + ".png", new_name + ".png")
