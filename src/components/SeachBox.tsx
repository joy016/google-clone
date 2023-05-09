import React, { useState } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';
import styled from '@emotion/styled';
import {
  Box,
  Icon,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from '@mui/material';

{
  /*Import Icons*/
}
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import SettingsVoiceSharpIcon from '@mui/icons-material/SettingsVoiceSharp';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const StyleSearchBox = styled(OutlinedInput)({
  borderRadius: '9999px',
  width: '100%',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
});

const SearchBox = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = searchParams.get('searchTerm');
  const [searchInput, setSearchInput] = useState(search);

  console.log(searchInput);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchInput) return;
    router.push(`/search/web?searchTerm=${searchInput}`);
  };

  const handleSearch = () => {
    if (!searchInput) return;
    router.push(`/search/web?searchTerm=${searchInput}`);
  };

  const handleClearSearch = () => {
    setSearchInput('');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: {
          sm: 600,
          md: 700,
          lg: 800,
        },
      }}
    >
      <StyleSearchBox
        id="outlined-adornment-weight"
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleClearSearch} size="medium">
              <CloseRoundedIcon fontSize="inherit" />
            </IconButton>
            <IconButton>
              <SettingsVoiceSharpIcon
                color="primary"
                sx={{ borderLeftStyle: 'inset', paddingLeft: '5px' }}
              />
            </IconButton>
            <IconButton onClick={handleSearch}>
              <SearchRoundedIcon color="primary" />
            </IconButton>
          </InputAdornment>
        }
        aria-describedby="outlined-weight-helper-text"
        inputProps={{
          'aria-label': 'weight',
        }}
      />
    </Box>
  );
};

export default SearchBox;
