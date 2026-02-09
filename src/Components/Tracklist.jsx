import React, {useState} from 'react';
import Styles from './Styles/Tracklist.module.css';
import Track from './Track'


const Tracklist = (props) => {
    
      return (
        <div className='Tracklist'>
            <h1>Tracklist</h1>
            {props.tracks.map((track) => {
                return (<Track 
                track={track}
                key={track.trackId}
                onAdd={props.addTrack}
                />
                )
            })}
        </div>
        );
}

export default Tracklist;