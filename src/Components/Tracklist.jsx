import React, {useState} from 'react';
import Styles from './Styles/Tracklist.module.css';

const Tracklist = () => {
    const [tracks, setTracks] = useState([{name: 'Monster', artist: 'Skillet', album: 'Awake', id: '1001'},
        {name: 'Little bit off', artist: 'Five finger death punch', album: 'Death March', id: '1002'},
        {name: 'Numb', artist: 'Neffex', album: 'yeeeahh', id: '1003'}]);

      return (
        <div>
        <ul className={Styles.ul}>
            {tracks.map(track=> 
            <li className={Styles.li} key={track.id}>
                {track.name} by {track.artist} from {track.album}
            </li>)}
        </ul>
        </div>
        );
}
      
    

    
    

export default Tracklist;