import React from 'react';
import data from '../../data/tipsData.js';
import SingleTip from './SingleTip';

const Tips = () => {
  const tips = data;

  return (
    <main className="w-full flex justify-center items-center">
      <div className="my-10 w-[90vw] max-w-[1170px] mx-auto border bg-gray-100">
        <h5 className="title text-center mb-4 font-bold">MORE TIPS:</h5>
        <section className="mt-4">
          {
            tips.map((tip) => {
              return <SingleTip key={tip.id} {...tip} />
            })
          }
        </section>
      </div>
    </main>
  );
}

export default Tips;