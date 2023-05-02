'use client';

import { useFetch } from '@/app/lib/hooks/useFetcher';
import styled from '@emotion/styled';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';

const StyledTypography = styled(Typography)({
  fontFamily: 'arial,sans-serif',
  fontSize: '15px',
  color: '#70757a',
});

const StyledListText = styled(ListItemText)({
  fontFamily: 'arial,sans-serif',
  color: '#70757a',
  '&:hover': {
    textDecoration: 'underline',
    cursor: 'pointer',
  },
});

const Footer = () => {
  const { GetCountry } = useFetch();
  const { data: country } = GetCountry();

  console.log('todos', country);
  return (
    <footer>
      <Box sx={{ backgroundColor: '#f2f2f2' }}>
        <Box>
          <StyledTypography
            variant="body2"
            sx={{ padding: '15px 30px', borderBottom: '1px solid #dadce0' }}
          >
            {country ? country.country : 'Test'}
          </StyledTypography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 20px',
          }}
        >
          <List
            component={Stack}
            direction="row"
            spacing={1}
            sx={{ borderBottom: '1px solid #dadce0' }}
          >
            <ListItem>
              <StyledListText primary="About" />
            </ListItem>
            <ListItem>
              <StyledListText primary="Advertising" />
            </ListItem>
            <ListItem>
              <StyledListText primary="Business" />
            </ListItem>
            <ListItem sx={{ whiteSpace: 'nowrap' }}>
              <StyledListText primary="How Search works" />
            </ListItem>
          </List>
          <List component={Stack} direction="row" spacing={1}>
            <ListItem>
              <StyledListText primary="Privacy" />
            </ListItem>
            <ListItem>
              <StyledListText primary="Terms" />
            </ListItem>
            <ListItem>
              <StyledListText primary="Settings" />
            </ListItem>
          </List>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
