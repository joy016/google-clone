import NoResult from '@/components/NoResult';
import WebSearchResult from '@/components/WebSearchResult';

import React from 'react';

interface SearchParamsProps {
  searchTerm: string;
}

const WebSearch = async ({
  searchParams,
}: {
  searchParams: SearchParamsProps;
}) => {
  const searchWord = searchParams.searchTerm;

  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchWord}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();

  const items = data.items;

  const searchInfo = data.searchInformation;

  if (!items || !searchInfo) {
    return <NoResult searchWord={searchWord} />;
  }

  return (
    <>
      <WebSearchResult MoItem={items} MoSearchInformation={searchInfo} />
    </>
  );
};

export default WebSearch;
