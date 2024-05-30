import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

function Grid() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/albums')
      .then(response => {
        setAlbums(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 grid-rows-3 h-full w-full">
      {albums.map(album => (
        <div key={album._id} className="bg-black text-white max-w-cardw max-h-cardh m-3 rounded-md">
          <img src={album.cover} alt={album.title} className="max-w-album max-h-album rounded-md" />
          <div className="pl-2">
            <h2>{album.name}</h2>
            <h3>{album.artist}</h3>
            <p>{album.price}</p>
          <div className="flex justify-items-start">
            {album.genres.map((genre, index) => (
              <p className="" key={index}>{genre}</p>
            ))}
          </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Grid;