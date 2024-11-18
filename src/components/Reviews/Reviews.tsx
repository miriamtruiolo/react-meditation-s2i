import React, { useState } from 'react';
import people from '../../data/reviewsData.js';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] = useState(0);
    const {name,job,image,text} = people[index];

    const checkNumber = (number: number): number => {
        if (number > people.length - 1) {
            return 0;
        }
        if (number < 0) {
            return people.length - 1;
        }
        return number;
    }    
    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };
    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };

    return (
        <main className="min-h-[10vh] grid place-items-center">
            <div className="w-[80vw] max-w-[620px]">
                <div className="text-center mb-16">
                    <h2>Reviews</h2>
                    <div className="h-1 w-24 bg-primary mx-auto"></div>
                    <article className="mt-8 bg-offWhite p-8 rounded shadow-light text-center hover:shadow-dark">
                        <div className="relative w-[150px] h-[150px] rounded-full mx-auto mb-6">
                            <img src={image} alt={name} className="w-full h-full object-cover rounded-full relative" />
                            <span className="absolute top-0 left-0 w-10 h-10 place-items-center transform translate-y-1/4">
                                <FaQuoteRight />
                            </span>
                        </div>
                        <h4 className="mb-1">{name}</h4>
                        <p className="mb-2 uppercase text-sm">{job}</p>
                        <p className="mb-3">{text}</p>
                        <div className="flex justify-center items-center">
                            <button className="text-primary text-xl bg-transparent border-transparent cursor-pointer hover:text-black mr-2" onClick={prevPerson}>
                                <FaChevronLeft />
                            </button>
                            <button className="text-primary text-xl bg-transparent border-transparent cursor-pointer hover:text-black ml-2" onClick={nextPerson}>
                                <FaChevronRight />
                            </button>
                        </div>
                    </article>
                </div>
            </div>
        </main>
    );
};
export default Review