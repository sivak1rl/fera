import React from 'react';
import FeraCard from '../components/FeraCard';
import FaqSection from '../components/FaqSection';

function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to FERA!</h1>
      <p>
        The Ford Employees Recreation Association is a Michigan non-profit corporation providing programs and services to Ford Motor Company employees, retirees, and other A/Z/D Plan eligible persons in Michigan.
      </p>

      <h2>FERA = Fun, Clubs & Travel</h2>

      <p>The Ford Employees Recreation Association Mission Statement:</p>
      <ul>
        <li>
          Provide Ford Motor Company salary / hourly employees, retirees, and family access to Diverse Work Life Balance activities, fellowship, and understanding in the form of:
        </li>
        <li>Athletic and Special Interest clubs</li>
        <li>Discount Travel</li>
        <li>Discount Hotels, Resorts, Amusement Parks</li>
        <li>Discount Entertainment and Sporting events</li>
      </ul>

      <p>
        Our most requested discount is for U.S. Park on Middlebelt. Brought to FERA members by American Express.
      </p>

      <FeraCard />
      
      <FaqSection />
    </div>
  );
}

export default Home;