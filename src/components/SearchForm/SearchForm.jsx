import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CurveBtn } from 'components/CurveBtn/CurveBtn';

export const SearchForm = ({ onSubmit }) => {
  const [searchValue, setInputValue] = useState('');
  const [, setSearchParams] = useSearchParams();

  function handleInputChange(e) {
    setInputValue(e.target.value);
    console.log(searchValue);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const query = searchValue.toLowerCase();
    if (query === '') {
      alert('enter something to find');
      setSearchParams();
      return;
    }

    console.log(query);
    setSearchParams({ query });

    onSubmit(query);
    setInputValue('');
  }

  return (
    <div className="mx-8 w-[510px] h-[71px] rounded-tl-[45px] rounded-bl-[80px] rounded-tr-[80px] rounded-br-[45px] border-grey1 border-solid border">
      <form
        onSubmit={handleSubmit}
        className="flex justify-end rounded-tl-[45px] rounded-bl-[80px] rounded-tr-[80px] rounded-br-[45px] h-full relative"
      >
        <input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          className="text-greyInput  font-main text-base leading-6 w-full bg-transparent border-none outline-none rounded-tl-[45px] rounded-bl-[80px] rounded-tr-[80px] rounded-br-[45px] placeholder:hover:border-none placeholder:hover:outline-none placeholder:active:border-none placeholder:active:outline-none placeholder:focus:border-none placeholder:focus:outline-none "
        />
        <CurveBtn
          type="submit"
          text="Search"
          cssClass="searchgreen-btn absolute right-0 -top-0.5 h-[72px]"
        ></CurveBtn>
      </form>
    </div>
  );
};
