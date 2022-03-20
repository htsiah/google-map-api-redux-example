import React, { Fragment } from 'react';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useDispatch } from 'react-redux';

import { DISPLAY_MAP_LOCATION, CLEAR_MAP_HISTORY } from '../../store/actions/actions';

const GoogleMapHistory = (props) => {
  const dispatch = useDispatch();

  const addMapDataHandler = () => {
    dispatch({ type: DISPLAY_MAP_LOCATION, geometry: props.geometry });
  };

  const clearMapHistoryHandler = () => {
    dispatch({ type: CLEAR_MAP_HISTORY });
  };

  return (
    <Fragment>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary={props.address} onClick={addMapDataHandler} />
        </ListItemButton>
      </ListItem>
    </Fragment>
  );
};
export default GoogleMapHistory;
