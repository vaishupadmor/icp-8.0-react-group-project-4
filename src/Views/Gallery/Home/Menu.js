
import React from 'react';
const Menu = ({ setGame }) => {
  return (
    <nav className="menu">
      <span className='menu-cart' onClick={() => setGame('godlike')}>
        <img src='https://i0.wp.com/blogs.rooter.gg/wp-content/uploads/2024/05/godlike.jpg?w=1280&ssl=1' className='img' />
        <h2 className='menu-heading'>GodLike</h2>
      </span>

      <span className='menu-cart' onClick={() => setGame('soul')}>
        <img src='https://i0.wp.com/blogs.rooter.gg/wp-content/uploads/2024/05/SouL-Esports.jpg?w=1200&ssl=1' className='img' />
        <h2 className='menu-heading'>SouL Esports</h2>
      </span>

      <span className='menu-cart' onClick={() => setGame('Vitality')}>
        <img src='https://th.bing.com/th/id/OIP.-escVL_9k8c5kbsBQGDRLwHaEK?rs=1&pid=ImgDetMain' className='img' />
        <h2 className='menu-heading'>Team Vitality</h2>
      </span>

      <span className='menu-cart' onClick={() => setGame('Xspark')}>
        <img src='https://i0.wp.com/blogs.rooter.gg/wp-content/uploads/2024/05/37425-0a25b1bd64be7b4413fdb7f26fe18283-1.jpg?w=1200&ssl=1' className='img' />
        <h2 className='menu-heading'>XSpark</h2>
      </span>

    </nav>
  );
};

export default Menu;
