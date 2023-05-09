'use client';

import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  styled,
} from '@mui/material';
import React from 'react';

// Typescript related
interface SearchWordProps {
  searchWord: string;
}

// Material Ui Custom Styling

const StyleWrapBox = styled(Box)({
  paddingTop: '3rem',
  paddingLeft: '12rem',
  height: '63vh',
});

type VariantMapping = {
  body2: React.ReactElement;
};

const NoResult: React.FC<SearchWordProps> = ({ searchWord }) => {
  const variantMapping: VariantMapping = {
    body2: <span style={{ fontWeight: 'bold' }}>{'{searchWord}'}</span>,
  };
  return (
    <StyleWrapBox>
      <Typography variant="body1" sx={{ paddingBottom: '1rem' }}>
        Your search{' '}
        <Box component="span" fontWeight="bold">
          {searchWord}{' '}
        </Box>
        did not match any documents.
      </Typography>
      <Typography variant="body1">Suggestions:</Typography>
      <ul>
        <li style={{ fontFamily: 'arial,sans-serif' }}>
          Make sure all words are spelled correctly.
        </li>
        <li style={{ fontFamily: 'arial,sans-serif' }}>
          Try different keywords.
        </li>
        <li style={{ fontFamily: 'arial,sans-serif' }}>
          Try more general keywords.
        </li>
      </ul>
    </StyleWrapBox>
  );
};

export default NoResult;
