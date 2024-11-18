import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

interface SingleTipProps {
  title: string;
  info: string;
}

const SingleTip: React.FC<SingleTipProps> = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);

  return (
    <article className="w-full max-w-lg mx-auto my-4 p-5 bg-white shadow-lg rounded-lg transition-transform hover:scale-105">
      <header className="flex justify-between items-center border-b pb-3">
        <h6 className="text-lg font-semibold text-gray-800">{title}</h6>
        <button
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors focus:outline-none focus:ring focus:ring-primary"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? (
            <AiOutlineMinus className="text-primary text-xl" />
          ) : (
            <AiOutlinePlus className="text-primary text-xl" />
          )}
        </button>
      </header>
      {showInfo && (
        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
          {info}
        </p>
      )}
    </article>
  );
};

export default SingleTip;
