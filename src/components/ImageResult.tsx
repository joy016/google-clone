'use client';

import React from 'react';
import { ImageSearchInfo, SearchItem } from '../../ts-files/imageSearch';
import { Box, Card, Grid, Paper, Typography, styled } from '@mui/material';
import Link from 'next/link';

interface AppProps {
  ImageRes: SearchItem[];
}

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const App: React.FC<AppProps> = ({ ImageRes }) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 2 }}
      // columns={{ xs: 4, sm: 8, md: 15 }}
      sx={{ padding: '30px', width: 'calc(100%-30px)' }}
    >
      {ImageRes.map(({ title, image, displayLink }) => {
        const { contextLink, thumbnailLink } = image;
        return (
          <Grid
            key={contextLink}
            item
            sm={6}
            md={3}
            lg={2}
            sx={{ display: 'flex', flexDirection: 'column' }}
          >
            <Card sx={{ maxWidth: 345, height: 160 }}>
              <Img
                alt="complex"
                src={thumbnailLink}
                sx={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </Card>
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                ':hover': {
                  textDecoration: 'underline',
                  cursor: 'pointer',
                },
              }}
            >
              <Typography>{title}</Typography>
              <Link href={contextLink}>{displayLink}</Link>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default App;
