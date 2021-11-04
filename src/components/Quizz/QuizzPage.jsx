/* eslint-disable */
import React, { useEffect } from 'react';
import axios from 'axios';
// import LinkBtn from '../Bases/LinkBtn';
import QuizzCard from './QuizzCard';
// import QuizzScore from './QuizzScore';
import './QuizzPage.css';
import initialTracks from '../../severalTracks';

const QuizzPage = () => {
  const [tracks, setTracks] = React.useState(initialTracks);
  const random = Math.floor(Math.random() * tracks.length);

  useEffect(() => {
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/9626980522'
      ) // https://cors-anywhere.herokuapp.com/ à ajouter au début
      .then((response) => response.data.tracks.data)
      .then((data) => {
        setTracks(data);
        console.log('dataLength ' + data.length);
        const touteLaDATA = data.map(
          (track, index) =>
            (track = {
              index: index,
              readable: track.readable,
              title: track.title_short,
              artiste: track.artist.name,
              album: track.album.title,
              duree: track.duration,
              picture: track.album.cover_medium,
              preview: track.preview
            })
        )
        console.log(touteLaDATA);
        // console.log(
        //   data.map(
        //     (track, index) =>
        //       (track = {
        //         index: index,
        //         readable: track.readable,
        //         title: track.title_short,
        //         artiste: track.artist.name,
        //         album: track.album.title,
        //         duree: track.duration,
        //       })
        //   )
        // );

        //ok data:
        const okData = touteLaDATA.filter((obj) => obj.picture && obj.preview && !(obj.title).includes('(') && obj.readable);
        console.log('okDataLength ' + okData.length)
        if (okData.length > 0) {
          console.log(
            okData.map(
              (track) => track)
          );
        }

        //data à sortir
        // const pasOKdata = touteLaDATA.filter((obj) => !obj.album.cover_medium || !obj.preview || (obj.title_short).includes('(') || !obj.readable);
        // console.log('pasOKdataLength ' + pasOKdata.length)
        // if (pasOKdata.length > 0) {
        //   console.log(
        //     pasOKdata.map(
        //       (track) =>
        //         (track = {
        //           index: track.index,
        //           readable: track.readable,
        //           title: track.title_short,
        //           artiste: track.artist.name,
        //           album: track.album.title,
        //           duree: track.duration,
        //         })
        //     )
        //   );
        // }
        
        // const preview = data.filter((obj) => obj.preview);
        // console.log('prevLength ' + preview.length);

        // const picture = data.filter((obj) => obj.album.cover_medium);
        // console.log('pictureLength ' + picture.length);
        
        // const containBracket = data.filter((obj) =>
        //   (obj.title_short).includes('(')
        // );
        // console.log('bracketsLength ' + containBracket.length);

        // const noPreview = data.filter((obj) => !obj.preview);
        // console.log('noPreviewLength ' + noPreview.length);

        // const notReadable = data.filter((obj) => obj.readable === false);
        // console.log('notReadableLength ' + notReadable.length);
      });
  }, []);

  // la bonne rep est dans track.title_short
  return (
    <main>
      <h1>Quizz</h1>
      <QuizzCard track={tracks[random]} />
      <div className="quizzBottom">
        {/* <QuizzScore /> */}
        <div className="linkBtnsContainer">
          {/* <LinkBtn />
          <LinkBtn /> */}
        </div>
      </div>
    </main>
  );
};

export default QuizzPage;
