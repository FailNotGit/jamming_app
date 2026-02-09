import React, {useCallBack} from 'react';

const handleClick = (e) => {
    return e;
}
const Track = (props) => {
    return (
        <div className='Track'>
            {console.log(props.track.trackId)}
            <li key={props.track.trackId}>{props.track.trackName} by {props.track.trackArtist} from {props.track.trackAlbum}</li>
            <button onClick={() => handleClick(props.onAdd(props.track))}>+</button>
        </div>
    )
}

export default Track;