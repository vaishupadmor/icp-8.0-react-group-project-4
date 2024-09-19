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
      <span className='menu-cart' onClick={() => setGame('totalgaming')}>
        <img src='https://i0.wp.com/blogs.rooter.gg/wp-content/uploads/2024/05/godlike.jpg?w=1280&ssl=1' className='img' />
        <h2 className='menu-heading'>GodLike</h2>
      </span>

      <span className='menu-cart' onClick={() => setGame('bl4ze')}>
        <img src='https://i0.wp.com/blogs.rooter.gg/wp-content/uploads/2024/05/SouL-Esports.jpg?w=1200&ssl=1' className='img' />
        <h2>SouL Esports</h2>
      </span>

      <span className='menu-cart' onClick={() => setGame('Vitality')}>
        <img src='https://th.bing.com/th/id/OIP.-escVL_9k8c5kbsBQGDRLwHaEK?rs=1&pid=ImgDetMain' className='img' />
        <h2>Team Vitality</h2>
      </span>

      <span className='menu-cart' onClick={() => setGame('football')}>
        <img src='https://i0.wp.com/blogs.rooter.gg/wp-content/uploads/2024/05/37425-0a25b1bd64be7b4413fdb7f26fe18283-1.jpg?w=1200&ssl=1' className='img' />
        <h2>XSpark</h2>
      </span>

    </nav>
  );
};

export default Menu;
