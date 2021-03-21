import React from 'react';

const listeners = {};

export function emit(event, ...args) {
  console.log(event, args);
  listeners[event] = {...args};
}

function attachListener(eventName, listener) {
  listeners[eventName] = listener;
}

function useMapMediator() {
  function mapDragged(center) {
    // const articles = aw
    console.log('useMapMEdiator map dragged', center);
  }
  attachListener('mapDragged', mapDragged);
}

const MapMediator = () => {
  useMapMediator();

  return null;
};

export default MapMediator;
