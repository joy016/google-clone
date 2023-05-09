'use client';

import { Stack, Skeleton, styled } from '@mui/material';

const StyledWrapper = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '2rem',
  height: '63vh',
  paddingBottom: '2rem,', // fallback value for all screen sizes
  [theme.breakpoints.up('md')]: {
    paddingLeft: '13rem', // value for medium-sized screens and up
  },
}));

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <StyledWrapper spacing={1}>
      {[...Array(5)].map((_, i) => (
        <>
          <Skeleton
            variant="text"
            sx={{ padding: '10px 10%', maxWidth: '36rem' }}
          />
          <Skeleton variant="rectangular" width={800} height={60} />
        </>
      ))}
    </StyledWrapper>
  );
}
