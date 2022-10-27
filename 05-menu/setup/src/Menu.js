import React from 'react';

const Menu = ({items}) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const {id, title, category, price, img, desc} = menuItem;
        return (
          <article key={id} className='menu-item'>
            <img src={img} className='photo' alt={title} />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h5 className='price'>${price}</h5>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        )
      })}
    </div>
  );
};

export default Menu;
