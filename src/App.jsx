import { artists } from './best-selling-music-artists';
import React from 'react';
import Header from '/components/Header'
import ArtistDetails from '/components/ArtistDetails';

function App() {
  return (
    <div className="app">
          <Header/>
            <div className="artist-list">
                {artists.map((artist, index) => (
                    <ArtistDetails key={index} artist={artist} />
                ))}
            </div>
    </div>
  );
}

export default App;
