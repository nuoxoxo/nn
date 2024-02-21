import requests, json

repo = 'https://github.com/nuoxoxo/in/blob/main/'
repo = 'https://raw.githubusercontent.com/nuoxoxo/in/main/'
URLs = [
    repo + 'canciones.json',
    repo + 'canciones_edition_jazz.json',
]

for i in range(1, 8):#9):
    URLs.append( repo + 'limited_edition_0' + str(i) + '.in' )

for url in URLs:print(url)

res = []
for url in URLs:
    response = requests.get( url )
    if response.status_code != 200:
        print(response.status_code)
        break
    data = response.json()
    for _, stuff in data.items():
        res.append(stuff['cover'])
    print('accessing url:', url)

print('/res', res, '/size', len(res))

with open('lines.in', 'w') as file:
    for line in res:
        file.write(line + '\n')
