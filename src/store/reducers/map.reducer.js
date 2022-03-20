import { ADD_MAP_DATA, DISPLAY_MAP_LOCATION, CLEAR_MAP_HISTORY } from '../actions/actions';

const initialState = {
  /* Show current search in google map */
  currentMapData: {},
  /* Display recent search */
  mapHistoryData: [],
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MAP_DATA:
      const index = state.mapHistoryData.length + 1;
      return {
        currentMapData: action.geometry,
        mapHistoryData: [{ index: index, address: action.address, geometry: action.geometry }, ...state.mapHistoryData],
      };
    case DISPLAY_MAP_LOCATION:
      return {
        currentMapData: action.geometry,
        mapHistoryData: state.mapHistoryData,
      };
    case CLEAR_MAP_HISTORY:
      return {
        currentMapData: action.geometry,
        mapHistoryData: [],
      };
    default:
      return state;
  }
};

export default mapReducer;
