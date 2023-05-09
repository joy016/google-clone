'use client';

import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useFetchRandomWord } from '@/app/lib/hooks/useFetcher';
import { useRouter } from 'next/navigation';

const StyledButton = styled(Button)({
  textTransform: 'none',
  color: '#3c4043',
  fontSize: '14px',
});

const StyledLoadingButton = styled(LoadingButton)({
  textTransform: 'none',
  color: '#3c4043',
  fontSize: '14px',
});

const HomeBody = () => {
  const router = useRouter();
  const { GetRandomWord } = useFetchRandomWord();
  const { data: randomWord } = GetRandomWord();
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

  const handleSearchRandom = () => {
    setLoading(true);
    if (!randomWord) return;
    router.push(`/search/web?searchTerm=${randomWord}`);
    setLoading(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!input) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  return (
    <>
      <Box
        sx={{
          width: {
            md: '50em',
          },
        }}
        component="form"
        onSubmit={handleSubmit}
      >
        <FormControl
          fullWidth
          sx={{
            m: 1,
            width: '100%',
            borderRadius: '50%,',
          }}
          variant="outlined"
        >
          <OutlinedInput
            onChange={(e) => setInput(e.target.value)}
            value={input}
            sx={{
              width: '100%',
              borderRadius: '30px',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
            }}
            id="outlined-adornment-weight"
            placeholder="Search Google or type a URL"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <KeyboardVoiceIcon />
              </InputAdornment>
            }
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />

          <Stack
            direction="row"
            spacing={2}
            sx={{
              margin: 'auto',
              paddingTop: '30px',
            }}
          >
            <StyledButton
              variant="contained"
              /*
              // @ts-ignore */
              color="grey"
              type="submit"
            >
              Google Search
            </StyledButton>

            <StyledLoadingButton
              size="small"
              loading={loading}
              variant="contained"
              onClick={handleSearchRandom}
              /*
              // @ts-ignore */
              color="grey"
              type="button"
            >
              <span>I Am Feeling Lucky</span>
            </StyledLoadingButton>
          </Stack>
        </FormControl>
      </Box>
    </>
  );
};

export default HomeBody;
