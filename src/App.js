import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import GamesList from "./components/GamesList";

const App = () =>{
  const [games,setGames] = useState([

      {
        "id": 110592,
        "alpha_channel": false,
        "animated": false,
        "game": 96367,
        "height": 800,
        "image_id": "co2dc0",
        "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2dc0.jpg",
        "width": 800,
        "checksum": "04a45b3f-4f90-f4a1-cc0d-1483f0cc2612"
      },
      {
        "id": 65483,
        "game": 100547,
        "height": 800,
        "image_id": "pkkd08qhfxt5cosp3hra",
        "url": "//images.igdb.com/igdb/image/upload/t_thumb/pkkd08qhfxt5cosp3hra.jpg",
        "width": 1260,
        "checksum": "e09f916b-04fe-8993-594e-b18435438a35"
      },
      {
        "id": 9331,
        "game": 8938,
        "height": 750,
        "image_id": "ikjcylxero1pb1sl9clj",
        "url": "//images.igdb.com/igdb/image/upload/t_thumb/ikjcylxero1pb1sl9clj.jpg",
        "width": 640,
        "checksum": "0519ea95-feda-c674-1e6a-88a388ba5899"
      },
      {
        "id": 136720,
        "alpha_channel": false,
        "animated": false,
        "game": 145578,
        "height": 800,
        "image_id": "co2xhs",
        "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2xhs.jpg",
        "width": 600,
        "checksum": "f369e510-d1a2-ddf5-fdc2-24fef827ccd0"
      },
      {
        "id": 900,
        "game": 194,
        "height": 362,
        "image_id": "fl0bjezupibkettkmsyg",
        "url": "//images.igdb.com/igdb/image/upload/t_thumb/fl0bjezupibkettkmsyg.jpg",
        "width": 300,
        "checksum": "ffbf4f5b-99b9-eab3-1eb6-ea7f4f9c2df1"
      },
      {
        "id": 136722,
        "alpha_channel": false,
        "animated": false,
        "game": 145580,
        "height": 1152,
        "image_id": "co2xhu",
        "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2xhu.jpg",
        "width": 864,
        "checksum": "826f9bb8-547b-91b3-6af3-5ea852b327e1"
      },
      {
        "id": 28001,
        "game": 46426,
        "height": 2156,
        "image_id": "arzwj3bju1aoakgufnku",
        "url": "//images.igdb.com/igdb/image/upload/t_thumb/arzwj3bju1aoakgufnku.jpg",
        "width": 1539,
        "checksum": "fb9fae9b-d717-d1d1-a3ee-ef6191af168d"
      },
      {
        "id": 6424,
        "game": 2410,
        "height": 150,
        "image_id": "y7otr2cfclfpfuhtzhzq",
        "url": "//images.igdb.com/igdb/image/upload/t_thumb/y7otr2cfclfpfuhtzhzq.jpg",
        "width": 342,
        "checksum": "d41815d5-85a7-ac17-c067-ac88563578e9"
      },
      {
        "id": 15242,
        "game": 18896,
        "height": 360,
        "image_id": "dq7tvq2dub1xj0jnqafe",
        "url": "//images.igdb.com/igdb/image/upload/t_thumb/dq7tvq2dub1xj0jnqafe.jpg",
        "width": 480,
        "checksum": "35bd8f63-6766-5426-d7c2-aaa34e8d8a19"
      },
      {
        "id": 6432,
        "game": 6264,
        "height": 341,
        "image_id": "rii076tdl6uy1tnhohsg",
        "url": "//images.igdb.com/igdb/image/upload/t_thumb/rii076tdl6uy1tnhohsg.jpg",
        "width": 500,
        "checksum": "f48c9e58-b52f-382b-9d92-4031e5a5a15c"
      }
  ])


  return <div className={'container-fluid game-app'}>
    <div className={'row'}>
    <GamesList games={games}/>
    </div>
  </div>
}

export default App;