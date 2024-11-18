import React from 'react';
import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import Tips from '../components/Tips/Tips';
import Review from '../components/Reviews/Reviews';

const Home = () => {
  return (
    <>
      <Header>
        <Card />
      </Header>
      <Tips />
      <Review />
    </>
  )
}

export default Home;