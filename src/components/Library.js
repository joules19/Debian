import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  libraryStatus,
  setSongs,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            setSongs={setSongs}
            audioRef={audioRef}
            isPlaying={isPlaying}
            key={song.id}
            song={song}
            songs={songs}
            setCurrentSong={setCurrentSong}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
