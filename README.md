# MaiMaiDX Songs Database
MaiMaiDX Songs Database is an API using expressJS

### LiveServer (Heroku)
  - You can use latest version at: https://maimaidx.herokuapp.com/maimai

### Response structure

The following JSON data is returned in the response body.

| Property | Description | Type |
| ------ | ------ | ------ |
| status | 	Give the result of the request that it's success or not. | Boolean |
| code | Request status code. | Integer |
| message | Message summary | String |
| jp_total | Total songs in japanese version | Intenger |
| en_total | Total songs in international version | Intenger |
| data | Provide useful data for processing | Any (Optional) |

### GET all songs
HTTP Request: 
```sh
GET /songs
```
Example: https://maimaidx.herokuapp.com/maimai/songs
### Using filters
HTTP Request: 
```sh
GET /songs?category=niconico&artist=livetune 
#Search for Category niconicoボーカロイド and Artist kz(livetune)
GET /songs?title=PANDORA%20PARADOXXX
#Search for song PANDORA PARADOXXX only
```
Example: 
https://maimaidx.herokuapp.com/maimai/songs?category=niconico&artist=livetune
https://maimaidx.herokuapp.com/maimai/songs?title=PANDORA%20PARADOXXX
### Available filters

Available filters can use in GET url

| Query | Description |
| ------ | ------ |
| title | 	Normal Song title |
| title_kana | Kana song title |
| artist | Artist name |
| category | Category name |
### Available category
Available category you can use in category fillter
| Value | Description |
| ------ | ------ |
| chunithm,ongeki | 	オンゲキCHUNITHM |
| touhou,touhou_project | 東方Project |
| pop,anime | POPSアニメ |
| niconico,vocaloid | niconicoボーカロイド |
| game,variety | ゲームバラエティ |
| maimai | maimai original |
### Video database
Feel free to help me add [video database (like chart music etc.)](https://github.com/ST4RCHASER/maimaidx-songs-database/blob/main/database/json/video.json) if you want to add you can make pull request thanks you <3
Thanks for help me :3

###icense
----
[GNU AGPL 3.0](https://www.gnu.org/licenses/agpl-3.0.en.html)
