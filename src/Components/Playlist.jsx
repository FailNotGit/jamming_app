import React, {useState} from 'react';
import Styles from './Styles/Playlist.module.css';


const Playlist = (props) => {


      return (
        <div className='Playlist'>
            <h1>{props.playlistName}</h1>
            {props.list.map((track) => {
                return ( 
                <div  key={track.trackId}>
                <li>{track.trackName} by {track.trackArtist} from {track.trackAlbum}</li>
                <button onClick={() => props.removeTrack(track.trackId)}>-</button>
                </div>
            )
            })}

        </div>
        );
    }

    export default Playlist;