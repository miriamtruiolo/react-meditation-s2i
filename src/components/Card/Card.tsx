import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <div className="card bg-white bg-opacity-75 p-6 rounded-lg shadow-lg">
      <div className="card-body text-center">
        <h5 className="card-title text-xl font-semibold">IT'S TIME TO MEDITATE</h5>
        <div className='h-1 w-24 bg-lightPink mx-auto my-4'></div> {/* Sostituito .underline */}
        <p className="card-text text-lg mb-4">Life moves fast, but take your time everyday.</p>
        <Link 
          to='/timer' 
          className="inline-block text-black bg-lightPink px-3 py-2 border-2 border-lightPink transition-all uppercase cursor-pointer hover:bg-transparent hover:text-lightPink">
          Start
        </Link>
      </div>
    </div>
  );
}

export default Card;