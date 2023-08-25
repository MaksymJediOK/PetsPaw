'use client';
import { Search } from '@/components/Search';

const UserSearch = () => {
  const handleSearch = (searchTerm: string) => {
    console.log(searchTerm);
  };

  return <Search onSearch={handleSearch} />;
};

export { UserSearch };
