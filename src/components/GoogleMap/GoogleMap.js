import React, { useEffect, useRef } from 'react';
import _ from 'lodash';

function GoogleMap({ center, zoom }) {
  const ref = useRef();

  useEffect(() => {
    let map;
    if (!_.isEmpty(center)) {
      map = new window.google.maps.Map(ref.current, {
        center,
        zoom,
      });

      new window.google.maps.Marker({
        position: center,
        map,
      });
    }
  });

  return <div style={{ height: 900 }} ref={ref} id='map'></div>;
}

export default GoogleMap;
