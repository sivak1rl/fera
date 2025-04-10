import React from 'react';

const clubs = [
  {
    name: 'Hiking Club',
    description: 'Join us for weekly hikes in the beautiful parks around Michigan!',
    meetingTime: 'Saturdays at 10am',
    contact: 'john@hikingclub.com'
  },
  {
    name: 'Book Club',
    description: 'We meet monthly to discuss a selected book across various genres.',
    meetingTime: 'First Tuesday of every month, 7pm',
    contact: 'emily@bookclub.com' 
  },
  {
    name: 'Photography Club',
    description: 'Share your passion for photography and improve your skills.',
    meetingTime: 'Every other Sunday, 2pm',
    contact: 'alex@photographyclub.com'
  }
];

function Clubs() {
  return (
    <div className="clubs-page">
      <h1>FERA Clubs</h1>
      <p>Check out some of our awesome clubs and join the fun!</p>
      
      <div className="club-list">
        {clubs.map(club => (
          <div key={club.name} className="club-item">
            <h2>{club.name}</h2>
            <p>{club.description}</p>
            <p><strong>Meeting Time:</strong> {club.meetingTime}</p>
            <p><strong>Contact:</strong> {club.contact}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Clubs;