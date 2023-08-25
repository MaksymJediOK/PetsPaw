'use client';
import './Search.scss';
import React, { useState } from 'react';
import Image from 'next/image';
import SearchIcon from '@/assets/icons/search-20.svg';

interface SearchBarProps {
    // eslint-disable-next-line no-unused-vars
  onSearch: (searchTerm: string) => void;
}

const Search = ({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='Search for breeds by name'
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className='search-button' onClick={handleSearch}>
        <Image
          src={SearchIcon}
          width={SearchIcon.width}
          height={SearchIcon.height}
          alt='search'
          priority
        />
      </button>
    </div>
  );
};

export { Search };
