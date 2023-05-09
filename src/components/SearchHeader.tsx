'use client';

import { Box, Button, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import styled from '@emotion/styled';
import SearchBox from './SeachBox';
import SearchHeaderOptions from './SearchHeaderOptions';
import Link from 'next/link';

const StyleButton = styled(Button)({
  textTransform: 'none',
  padding: '0.5rem 0',
});

const SearchHeader = () => {
  const isResponsive = useMediaQuery('(min-width:570px)');

  return (
    <header style={{ borderBottom: '1px solid #dadce0' }}>
      <Box
        sx={{
          padding: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '35px',
            width: {
              sm: 600,
              md: 700,
              lg: 800,
            },
          }}
        >
          <Link href={'/'}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
              width={120}
              height={40}
              alt="Picture of the author"
            />
          </Link>

          <SearchBox />
        </Box>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <Box
            sx={{
              padding: '1em',
              display: {
                xs: 'none',
                sm: 'flex',
                md: 'flex',
                lg: 'flex',
                xl: 'lg',
              },
            }}
          >
            <SettingsOutlinedIcon />
            <AppsRoundedIcon />
          </Box>
          <StyleButton variant="contained" size="medium">
            Sign in
          </StyleButton>
        </Box>
      </Box>
      <SearchHeaderOptions />
    </header>
  );
};

export default SearchHeader;
