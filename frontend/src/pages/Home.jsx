import React from 'react';
import FeraCard from '../components/FeraCard';
import FaqSection from '../components/FaqSection';

function Home() {
  return (
    <main className="fera-main">
      <section className="fera-section">
          <h2>Our Mission</h2>
          <p>
            To provide Ford Motor Company employees, retirees, and their families with access to diverse work-life balance activities, fellowship, and understanding through athletic and special interest clubs, discount travel, and entertainment events.
          </p>
        </section>
        <section className="fera-section">
          <h2>Join Our Clubs</h2>
          <p>
            Explore a variety of clubs ranging from sports to special interests. Connect with fellow employees and participate in activities that enrich your work-life experience.
          </p>
        </section>
        <section className="fera-section">
          <h2>Exclusive Discounts</h2>
          <p>
            Enjoy discounts on travel, hotels, resorts, amusement parks, entertainment, and sporting events. Take advantage of the benefits available to FERA members.
          </p>
        </section>
    </main>
  );
}

export default Home;