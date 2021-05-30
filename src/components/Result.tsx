import React from 'react';

// Material ui components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


export default function Result({ result }: { result: any }) {

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Typography>
          Probability
       </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography>
          {result?result.probability:0}%
       </Typography>
      </Grid>
    </Grid>
  );
};