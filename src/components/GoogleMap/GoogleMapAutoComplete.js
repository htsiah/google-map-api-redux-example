import React, { Fragment } from 'react';
import { TextField, Divider, List, Button, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { usePlacesWidget } from 'react-google-autocomplete';
import { useSelector, useDispatch } from 'react-redux';

import GoogleMapHistory from './GoogleMapHistory';
import { ADD_MAP_DATA, CLEAR_MAP_HISTORY } from '../../store/actions/actions';

const GoogleMapAutoComplete = () => {
  const dispatch = useDispatch();
  const mapHistoryData = useSelector((state) => state.map.mapHistoryData);

  const addMapDataHandler = (geometry, address) => {
    dispatch({ type: ADD_MAP_DATA, geometry: geometry, address: address });
  };

  const clearMapHistoryHandler = () => {
    dispatch({ type: CLEAR_MAP_HISTORY });
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
      <Box component='form' noValidate autoComplete='off'>
        <TextField fullWidth id='search-a-place-input' label='Search a place' variant='outlined' autocomplete='off' inputRef={materialRef} />
      </Box>

      <br />
      <br />
      <Button variant='contained' startIcon={<DeleteIcon />} onClick={clearMapHistoryHandler} fullWidth>
        Clear search history
      </Button>
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
