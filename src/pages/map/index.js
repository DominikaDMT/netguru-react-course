import React from 'react';
import Page from '../../components/Page';
import MapMediator from './mediator';

const mapPage = () => {
  return (
    <>
      <MapMediator />
      <Page />
    </>
  );
};

export default mapPage;
