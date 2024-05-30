import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

const Weekly = () => {
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
    <div className="mt-16 flex flex-row justify-center">
      <div className="w-fullPage">
        <div className="font-poppins font-bold text-yellow text-4xl">New This Week</div>

      <div className="grid grid-cols-4 w-fullPage">
      {albums.slice(-4).map(album => (
        <div key={album._id} className="flex flex-col bg-listing text-white max-w-cardw max-h-cardh m-3 border-2 border-gray font-poppins rounded-xl">
          <div className="flex justify-center px-5 pt-5">
            <img src={album.cover} alt={album.title} className="max-w-album max-h-album rounded-md" />
          </div>
          <div className="pl-5 pt-2">
          <h2 className="font-merriweather font-bold overflow-ellipsis overflow-hidden whitespace-nowrap">{album.name}</h2>
            <h3 className="text-md text-gray">{album.artist}</h3>
            <div className="flex justify-items-start">
              {album.genres.map((genre, index) => (
                <p className="mr-1 my-1 px-2 min-w-gw font-light text-xs text-gray border-2 border-dark-gray rounded-md" key={index}>{genre}</p>
              ))}
            </div>
            <p className="mb-2 text-md font-light">{"$"+album.price}</p>
          </div>
        </div>
      ))}
    </div>
    
      </div>
    </div>
  )
}

export default Weekly