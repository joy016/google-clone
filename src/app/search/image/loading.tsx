'use client';

import { Box, Grid, Skeleton } from '@mui/material';

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <Box sx={{ height: '66vh', padding: '2rem 6%' }}>
      <Grid container spacing={1}>
        {[...Array(20)].map((_, i) => (
          <>
            <Grid item xs={3}>
              <Skeleton variant="rectangular" width={310} height={170} />
              <Box sx={{ pt: 0.5 }}>
                <Skeleton width="90%" />
                <Skeleton width="80%" />
              </Box>
            </Grid>
          </>
        ))}
      </Grid>
    </Box>
  );
}
