'use client';

import { Search } from '@/components/Search';

const UserChoiceMenu = () => {
  const handleSearch = (searchTerm: string) => {
    console.log(searchTerm);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
    </div>
  );
};

export { UserChoiceMenu };
