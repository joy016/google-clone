'use client';

import styled from '@emotion/styled';
import { Stack, Typography, Box } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import Button from '@mui/material/Button';

import Link from 'next/link';
import React from 'react';

const StyledTypography = styled(Typography)({
  color: 'black',
  padding: '3px',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const StyleBox = styled(Box)({
  padding: '5px',
  '&:hover': {
    backgroundColor: '#F0F0F0',
    borderRadius: '50%',
  },
});

const HomeHeader = () => {
  return (
    <>
      <Stack
        direction="row"
        spacing={1}
        sx={{ justifyContent: 'end', paddingRight: '30px', paddingTop: '30px' }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Link href="#">
            <StyledTypography variant="body2">Gmail</StyledTypography>
          </Link>
          <Link href="#">
            <StyledTypography variant="body2">Images</StyledTypography>
          </Link>
        </Box>

        <StyleBox>
          <AppsIcon />
        </StyleBox>

        <Button
          size="small"
          variant="contained"
          href="#contained-buttons"
          sx={{ textTransform: 'none' }}
        >
          Sign in
        </Button>
      </Stack>
    </>
  );
};

export default HomeHeader;
