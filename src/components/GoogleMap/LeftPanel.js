import React, { Fragment } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { useSelector } from 'react-redux';
import GoogleMap from './GoogleMap';

const render = (status) => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return null;
};

const LeftPanel = () => {
  const currentMapData = useSelector((state) => state.map.currentMapData);
  const center = currentMapData;
  const zoom = 10;

  return (
    <Fragment>
      <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} render={render}>
        <GoogleMap center={center} zoom={zoom} />
      </Wrapper>
    </Fragment>
  );
};

export default LeftPanel;
