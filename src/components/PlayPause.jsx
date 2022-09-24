import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay  }) => (
  isPlaying &&  activeSong?.title === song.tilte ? (
    <FaPauseCircle
      size={35}
      className='text-gray-300'
      onClick={handlePause}
    />
  ) : (
    <FaPlayCircle
      size={35}
      className='text-gray-300'
      onClick={handlePlay}
    />
  )
);

export default PlayPause;
