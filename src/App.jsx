import React, { useCallback, useState } from 'react'
import './App.css'
import Playlist from './Components/Playlist'
import Tracklist from './Components/Tracklist';

function App() {
    const [tracks, setTracks] = useState([{trackName: 'Monster', trackArtist: 'Skillet', trackAlbum: 'Awake', trackId: 1001},
          {trackName: 'Little bit off', trackArtist: 'Five finger death punch', trackAlbum: 'Death March', trackId: 1002},
          {trackName: 'Numb', trackArtist: 'Neffex', trackAlbum: 'yeeeahh', trackId: 1003}]);
      
    const [playlistName, setPlaylistName] = useState('My Playlist');
    const [list, setList] = useState([{trackName: 'Monster', trackArtist: 'Skillet', trackAlbum: 'Awake', trackId: 1001}]);
  
    const addTrack = (newTrack) => {
      console.log(newTrack);
          if(list.some(track => track.trackId === newTrack.trackId)) {
            return;
          }
          else {
            setList((prev) => [...prev, newTrack]);
            console.log(list);
          }
        }
    
        const removeTrack = (trackId) => {
        const newList = list.filter((track) => track.trackId !== trackId);
        
        setList(newList);
    }
    

  return (
    <>
      <Tracklist tracks={tracks} addTrack={addTrack}/>
      <Playlist addTrack={addTrack} playlistName={playlistName} changePlaylistName={setPlaylistName} list={list} removeTrack={removeTrack}/>
    </>
  )
}

export default App
