import { CurveBtn } from 'components/CurveBtn/CurveBtn';
import { Logo } from 'components/Logo/Logo';
import React from 'react';

export const FavoriteItem = ({ img, title, description, time }) => {
  return (
    <>
      <li className="flex mx-auto mb-10">
        <div className=" bg-zinc-50 border-2 border-red-500 w-[1240px]">
          <div className="flex my-10 mx-10 border-2 border-fuchsia-500">
            <img className="w-[318px] h-[324px] mr-10" src={img} alt={img} />
            <div className="flex flex-col">
              <div className="flex mb-12">
                <h2 className="text-2xl ">{title}</h2>
                <button className="flex ml-auto ">
                  <Logo />
                </button>
              </div>
              <div className="flex h-full justify-between flex-col w-full">
                <p className="text-lg ">{description}</p>
                <div className="flex justify-between">
                  <p className="mt-auto text-sm font-medium">{time}</p>
                  <CurveBtn cssClass="seerecipe-btn" text="See recipe" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
