import React from 'react';
import Announcement from '../Components/Announcement';
import Navbar from '../Utils/Navbar';
import Banner from '../Components/Banner';

const HomePage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Banner />
    </div>
  )
}

export default HomePage;
