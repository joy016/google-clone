'use client';

import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Parser from 'html-react-parser';

// import styled from '@emotion/styled';
import { styled } from '@mui/material/styles';
import { MoItem, MoSearchInformation } from '../../ts-files/webSearch';
import Link from 'next/link';

//typeScript
interface AppProps {
  MoSearchInformation: MoSearchInformation;
  MoItem: any[];
}

// Custom styles for MUI components

const StyledHeaderTypog = styled(Typography)({
  padding: '20px 0',
  fontFamily: 'Google Sans,arial,sans-serif',
  color: '#70757a',
  maxWidth: '36rem',
});

const StyledWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '2rem', // fallback value for all screen sizes
  [theme.breakpoints.up('md')]: {
    paddingLeft: '13rem', // value for medium-sized screens and up
  },
}));

const StyledTitle = styled(Typography)({
  color: '#1a0dab',
  fontSize: '20px',

  fontFamily: 'arial,sans-serif',
  ':hover': {
    textDecoration: 'underline',
  },
});

const WebSearchResult: React.FC<AppProps> = ({
  MoSearchInformation,
  MoItem,
}) => {
  return (
    <StyledWrapper>
      <StyledHeaderTypog variant="body2">
        About {MoSearchInformation.formattedTotalResults} results (
        {`${MoSearchInformation.searchTime} seconds`})
      </StyledHeaderTypog>

      {MoItem.map(({ link, title, formattedUrl, htmlSnippet }) => (
        <Box key={link} sx={{ paddingBottom: '20px', maxWidth: '36rem' }}>
          <Typography>{formattedUrl}</Typography>
          <Link href={link}>
            <StyledTitle>{title}</StyledTitle>
          </Link>
          <Typography>{Parser(htmlSnippet)}</Typography>
        </Box>
      ))}
    </StyledWrapper>
  );
};

export default WebSearchResult;
