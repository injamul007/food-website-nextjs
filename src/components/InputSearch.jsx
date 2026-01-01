"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const InputSearch = () => {
  const router = useRouter();
  const params = useSearchParams();

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    console.log(search)

    //? New Search Parameters added
    const newParams = new URLSearchParams(params.toString())
    newParams.set('search', search)
    router.push(`?${newParams.toString()}`)
  }


  return (
    <div>
      <form onSubmit={handleSearch}>
        <input className='border border-gray-500 rounded-lg px-4 py-1' type="search" name='search' placeholder='Enter Food Name' />
        <button type='submit' className='border rounded-lg px-2 py-1 cursor-pointer hover:bg-gray-600'>Search</button>
      </form>
    </div>
  );
};

export default InputSearch;