import React, { Fragment } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    height: '100%',
  },
};

const GoogleMap = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Paper style={styles.Paper}>
          <LeftPanel />
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper style={styles.Paper}>
          <RightPanel />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default GoogleMap;
