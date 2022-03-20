import React, { Fragment } from 'react';

import Header from './Layouts/Header';
import GoogleMap from './GoogleMap';

const App = () => {
  return (
    <Fragment>
      <Header />
      <GoogleMap />
    </Fragment>
  );
};

export default App;
