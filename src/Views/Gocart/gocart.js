import React, { useState } from 'react';
import './gocart.css';

const Shopcard = [
    {
        name: "God of War",
        price: "$30",
        imgurl: "https://upload.wikimedia.org/wikipedia/en/e/ee/God_of_War_Ragnar%C3%B6k_cover.jpg",
        description: "In God of War, player control Kratos, a Spartan warrior who is sent by the Greek Gods to kill Ares, the God of War."
    },
    {
        name: "GTA 5",
        price: "$30",
        imgurl: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
        description: "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games."
    }
];

const App = () => {
    const [data, setData] = useState(null);


    const storeData = () => {
        localStorage.setItem('shopcard', JSON.stringify(Shopcard));
        alert('Data stored in local storage!');
    };


    const fetchData = () => {
        const storedData = localStorage.getItem('shopcard');
        if (storedData) {
            setData(JSON.parse(storedData));
        } else {
            alert('No data found in local storage!');
        }
    };

    return (
        <div>
            <button onClick={storeData}>Store Data</button>
            <button onClick={fetchData}>Fetch Data</button>

            {data && (
                <div>
                    {data.map((item, index) => (
                        <div key={index}>
                            <h2>{item.name}</h2>
                            <p>Price: {item.price}</p>
                            <img src={item.imgurl} alt={item.name} style={{ width: '200px' }} />
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            )}
            <div className="title">PRODUCT DETAIL</div>
            <div className="main-container">

                <div className="detail-game">
                    <div className="image-container">
                        <img src="https://upload.wikimedia.org/wikipedia/en/e/ee/God_of_War_Ragnar%C3%B6k_cover.jpg" alt="Product Image" />
                    </div>

                    <div className="content-container">
                        <h1 className="name-game"> God of War</h1>
                        <h5>RPG- ification of action game</h5>
                        <div className="game-price">2500₹</div>
                        <p>In God of War, player control Kratos, a Spartan warrior who is sent by the Greek Gods to kill Ares, the God of War.</p>
                        <div className="btn-container">
                            <button>Buy Now</button>
                            <button>Remove From Cart
                                <span>
                                    <svg className="" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='finnal-pricecon'>
                <div className='price-con'>
                <div className='finnal-price'></div>
                </div>
            </div>
        </div>
    );
};

export default App;