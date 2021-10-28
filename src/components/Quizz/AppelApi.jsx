import axios from 'axios';
import React, { useState } from 'react';
import DisplayMusic from './DisplayMusic';

const sampleMusic = {
  title: 'fff',
  cover: 'dwvfdsfsd5',
  contributors: 'dcdsf',
};

function AppelApi() {
  const [music, setMusic] = useState(sampleMusic);
  let numberMax;
  const RandomFunction = () => {
    const numberRandom = Math.floor(Math.random() * numberMax) + 1;
    console.log(numberRandom);
  };

  const getMusic = () => {
    // Send the request
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/9582675762'
      )
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setMusic(data);
        numberMax = parseInt(data.tracks.data.length, 10);
      });

    //   const options = {
    //     method: 'GET',
    //     url: 'https://api.deezer.com/album/302127',
    //     headers: {
    //       'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
    //       'x-rapidapi-key': '4966c42fd6b9361045aec201ed25645'
    //     }
    //   };

    //   axios.request(options).then(function (response) {
    //     console.log(response.data);
    //   }).catch(function (error) {
    //     console.error(error);
    //   });
    RandomFunction();
  };

  return (
    <div className="App">
      <DisplayMusic music={music} />
      <button type="button" onClick={getMusic}>
        Play
      </button>
    </div>
  );
}

export default AppelApi;
