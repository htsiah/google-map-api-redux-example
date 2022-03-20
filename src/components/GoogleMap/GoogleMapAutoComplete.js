import React, { Fragment } from 'react';
import { TextField, Divider, List } from '@mui/material';
import { usePlacesWidget } from 'react-google-autocomplete';
import { useSelector, useDispatch } from 'react-redux';

import GoogleMapHistory from './GoogleMapHistory';
import { ADD_MAP_DATA } from '../../store/actions/actions';

const GoogleMapAutoComplete = () => {
  const dispatch = useDispatch();
  const mapHistoryData = useSelector((state) => state.map.mapHistoryData);

  const addMapDataHandler = (geometry, address) => {
    dispatch({ type: ADD_MAP_DATA, geometry: geometry, address: address });
  };

  const { ref: materialRef } = usePlacesWidget({
    onPlaceSelected: (place) => {
      if (!place.geometry || !place.geometry.location) {
        console.log('Returned place contains no geometry');
        return;
      }
      // If the place has a geometry, then set to store.
      if (place.geometry.viewport) {
        addMapDataHandler(place.geometry.viewport, place.formatted_address);
      } else {
        addMapDataHandler(place.geometry.location, place.formatted_address);
      }
    },
  });

  return (
    <Fragment>
      <TextField fullWidth id='search-a-place-input' label='Search a place' variant='outlined' inputRef={materialRef} />
      <br />
      <br />
      <Divider>Recent search</Divider>
      <nav aria-label='secondary mailbox folders'>
        <List>
          {mapHistoryData.map((mapData) => (
            <GoogleMapHistory key={mapData.index} geometry={mapData.geometry} address={mapData.address} />
          ))}
        </List>
      </nav>
    </Fragment>
  );
};

export default GoogleMapAutoComplete;
