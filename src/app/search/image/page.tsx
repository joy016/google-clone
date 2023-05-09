import ImageResult from '@/components/ImageResult';
import { Box } from '@mui/material';
import React from 'react';

interface SearchParamsProps {
  searchTerm: string;
}

const ImageSearch = async ({
  searchParams,
}: {
  searchParams: SearchParamsProps;
}) => {
  const searchImage = searchParams.searchTerm;

  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchImage}&searchType=image`
  );

  if (!res.ok) {
    throw new Error('Faild to fetch Image');
  }

  const data = await res.json();
  const result = data.items;

  return <ImageResult ImageRes={result} />;
};

export default ImageSearch;
