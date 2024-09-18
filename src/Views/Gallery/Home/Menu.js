// import React from 'react'

// const Menu = ({ setGame }) => {
//   return (
//     <>
//       <nav className="menu">
//         <span className='menu-cart' onClick={() => { setGame='badmintion' 
//         console.log(setGame='badmintion');
//         }}>
//           <img src='https://staticg.sportskeeda.com/olympics_images/ic-badminton-selected.png' className='img' />
//           <h2>Badminton</h2>
//         </span>

//         <span className='menu-cart' onClick={() => setGame('volleyball')}>
//           <img src='https://staticg.sportskeeda.com/olympics_images/ic-volleyball-selected.png' className='img' />
//           <h2>Volley ball</h2>
//         </span>
//         <span className='menu-cart' onClick={() =>
//           setGame('basketball')}>
//           <img src='https://staticg.sportskeeda.com/olympics_images/ic-basketball-selected.png' className='img' />
//           <h2>Basket Ball</h2>
//         </span>

//         <span className='menu-cart' onClick={() =>
//           setGame('football')}>
//           <img src='https://staticg.sportskeeda.com/olympics_images/ic-football-selected.png' className='img' />
//           <h2>Foot Ball</h2>
//         </span>
//         <span className='menu-cart' onClick={() =>
//           setGame('tennis')}>
//           <img src='https://staticg.sportskeeda.com/olympics_images/ic-table-tennis-selected.png' className='img' />
//           <h2>Table tennis</h2>
//         </span>

//         <span className='menu-cart' onClick={() =>
//           setGame('hockey')}>
//           <img src='https://staticg.sportskeeda.com/olympics_images/ic-hockey-selected.png' className='img' />
//           <h2>Hockey</h2>
//         </span>

//       </nav>
//     </>
//   );
// };

// export default Menu


import React from 'react';
const Menu = ({ setGame }) => {
  return (
    <nav className="menu">
      <span className='menu-cart' onClick={() => setGame('badminton')}>
        <img src='https://staticg.sportskeeda.com/olympics_images/ic-badminton-selected.png' className='img' />
        <h2 className='menu-heading'>Badminton</h2>
      </span>

      <span className='menu-cart' onClick={() => setGame('volleyball')}>
        <img src='https://staticg.sportskeeda.com/olympics_images/ic-volleyball-selected.png' className='img' />
        <h2>Volley Ball</h2>
      </span>

      <span className='menu-cart' onClick={() => setGame('basketball')}>
        <img src='https://staticg.sportskeeda.com/olympics_images/ic-basketball-selected.png' className='img' />
        <h2>Basket Ball</h2>
      </span>

      <span className='menu-cart' onClick={() => setGame('football')}>
        <img src='https://staticg.sportskeeda.com/olympics_images/ic-football-selected.png' className='img' />
        <h2>Foot Ball</h2>
      </span>

      <span className='menu-cart' onClick={() => setGame('tennis')}>
        <img src='https://staticg.sportskeeda.com/olympics_images/ic-table-tennis-selected.png' className='img' />
        <h2>Table Tennis</h2>
      </span>

      <span className='menu-cart' onClick={() => setGame('hockey')}>
        <img src='https://staticg.sportskeeda.com/olympics_images/ic-hockey-selected.png' className='img' />
        <h2>Hockey</h2>
      </span>
    </nav>
  );
};

export default Menu;
