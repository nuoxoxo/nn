import json

res = []
with open('../_chengyu_database_/data/idiom.json', 'r') as file:
    data = json.load(file)
    for line in data:
        res.append(line['word'])
print(len(res), res[10000], res[20000])

