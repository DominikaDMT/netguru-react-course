import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import WikipediaApi from '../services/api/wikipedia';
import { emit } from '../pages/map/mediator';

const gdanskPosition = {
  lat: 54.3478088,
  lng: 18.6598646,
};

const inowroclawPosition = {
  lat: 52.7815773,
  lng: 18.2151531
}

const defaultZoom = 11;

const GoogleMap = () => {
  useEffect(() => {
    async function fetchArticles () {
      const articles = await WikipediaApi.getArticles({
        coord: inowroclawPosition,
      });
      console.log('Articles for Gdańsk: ', articles);
    }
    fetchArticles();
  }, []);

  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={inowroclawPosition}
        defaultZoom={defaultZoom}
        onChange={(event) => emit('mapDragged', event.center)}
      ></GoogleMapReact>
    </div>
  );
};

export default GoogleMap;