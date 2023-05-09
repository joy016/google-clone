import React from 'react';

//******************** */ impports from Material UI *************************
import { Box, Stack, Typography } from '@mui/material';
import styled from '@emotion/styled';

//***************************** Import Icons  *********************************
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { useRouter, useSearchParams } from 'next/navigation';

const StyledTypography = styled(Typography)({
  color: '#70757a',
  fontFamily: 'Google Sans,arial,sans-serif',
  fontSize: '14px',
});

const StyledStack = styled(Stack)({
  alignItems: 'center',
  ':hover': {
    cursor: 'pointer',
    textDecoration: 'underline',
  },
});

const SearchHeaderOptions = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');

  const router = useRouter();

  function selectTab(tab: string) {
    router.push(
      `/search/${tab === 'Images' ? 'image' : 'web'}?searchTerm=${searchTerm}`
    );
  }

  return (
    <Box
      gap={3}
      sx={{
        display: 'flex',
        paddingLeft: {
          md: '12rem',
        },
        paddingBottom: '10px',
        justifyContent: {
          xs: 'center',
          sm: 'center',
          md: 'start',
        },
        width: 'calc(100%-12rem)',
      }}
    >
      <StyledStack direction="row" onClick={() => selectTab('All')}>
        <SearchSharpIcon fontSize="small" color="primary" />
        <StyledTypography>All</StyledTypography>
      </StyledStack>
      <StyledStack direction="row" onClick={() => selectTab('Images')}>
        <CameraAltOutlinedIcon fontSize="small" color="action" />
        <StyledTypography>Images</StyledTypography>
      </StyledStack>
    </Box>
  );
};

export default SearchHeaderOptions;
