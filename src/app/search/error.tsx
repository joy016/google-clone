'use client'; // Error components must be Client components

import { Box, Button, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Box
      sx={{
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        height: {
          md: '65vh',
        },
      }}
    >
      <Stack direction="row">
        <Typography variant="h4">Something went wrong!</Typography>
        <Button variant="contained" onClick={() => reset()}>
          Contained
        </Button>
      </Stack>
    </Box>
  );
}
