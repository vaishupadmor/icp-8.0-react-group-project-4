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
        <img src='https://gamingonphone.com/wp-content/uploads/2020/10/WhatsApp-Image-2020-10-18-at-11.03.31-PM.jpeg' className='img' />
        <h2 className='menu-heading'>Total gaming</h2>
      </span>

      <span className='menu-cart' onClick={() => setGame('volleyball')}>
        <img src='https://playerbros.com/wp-content/uploads/2020/03/EShGJKrWsAA5jyT.jpg' className='img' />
        <h2>BL4ZE Esports</h2>
      </span>

      <span className='menu-cart' onClick={() => setGame('basketball')}>
        <img src='https://th.bing.com/th/id/OIP.-escVL_9k8c5kbsBQGDRLwHaEK?rs=1&pid=ImgDetMain' className='img' />
        <h2>Team Vitality</h2>
      </span>

      <span className='menu-cart' onClick={() => setGame('football')}>
        <img src='https://th.bing.com/th/id/OIP.gf3TIICHn_WjIe8h_6UotAHaE8?rs=1&pid=ImgDetMain' className='img' />
        <h2>Team brutality</h2>
      </span>
      
    </nav>
  );
};

export default Menu;
