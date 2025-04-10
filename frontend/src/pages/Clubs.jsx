import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

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
  },
  {
    name: 'Book Club',
    description: 'We meet monthly to discuss a selected book across various genres.',
    meetingTime: 'First Tuesday of every month, 7pm',
    contact: 'emily@bookclub.com'
  }
];

function ClubItems({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((club, index) => (
          <div key={index} className="club-item">
            <h2>{club.name}</h2>
            <p>{club.description}</p>
            <p><strong>Meeting Time:</strong> {club.meetingTime}</p>
            <p><strong>Contact:</strong> {club.contact}</p>
          </div>
        ))}
    </>
  );
}

function Clubs() {
  const itemsPerPage = 5; // Show 5 clubs per page
  const [itemOffset, setItemOffset] = useState(0);

  // Calculate the current items to display
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = clubs.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(clubs.length / itemsPerPage);

  // Invoke when user clicks to request another page
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % clubs.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="clubs-page">
      <h1>FERA Clubs</h1>
      <p>Check out some of our awesome clubs and join the fun!</p>

      <div className="club-list">
        <ClubItems currentItems={currentItems} />
      </div>

      <div className="pagination-container">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
        />
      </div>
    </div>
  );
}

export default Clubs;