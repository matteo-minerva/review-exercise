import React, { useState } from "react";
import people from "../data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkIndex = (value) => {
    if (value > people.length - 1) {
      return 0;
    }
    if (value < 0) {
      return people.length - 1;
    }
    return value;
  };

  const handlePrev = () => {
    setIndex((prevIndex) => {
      let newIndex = prevIndex - 1;
      return checkIndex(newIndex);
    });
  };

  const handleNext = () => {
    setIndex((prevIndex) => checkIndex(prevIndex + 1));
  };

  const handleSurprise = () => {
    let randNum = Math.floor(Math.random() * people.length);
    if (randNum === index) {
      setIndex(randNum + 1);
    } else setIndex(randNum);
  };

  return (
    <>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>

        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>

        <div className="button-container">
          <button className="prev-btn" onClick={handlePrev}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>

        <div className="random-btn" onClick={handleSurprise}>
          Surprise me
        </div>
      </article>
    </>
  );
};

export default Review;
