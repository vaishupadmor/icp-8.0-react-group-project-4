import React from 'react'
import "./About.css"
import Abcard from '../../Components/AboutCards/Abcard'
import Footer from '../../Components/Footer/Footer1'
import Navbar from '../../Components/Navbar/Navbar'
import GameCard from '../../Components/AboutCards/GameCard'

const games = [
    {
        image: 'https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/40324/optimized_large_thumb_stage.jpg',
        title: 'PUBG Mobile',
        description: 'Take on the battlefield and outlast your opponents in this thrilling battle royale.'
    },
    {
        image: 'https://miro.medium.com/v2/resize:fit:1024/0*tRcHLBwZ8R8HgjF5.png',
        title: 'Garena Free Fire',
        description: 'Dive into fast-paced action in this game where only the smartest and fastest players survive.'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPWEOwwb_IOc0SJvWrrfO8ZvnjfMQwBeUWOg&usqp=CAU',
        title: 'Call of Duty: Mobile',
        description: 'Experience the classic CoD action with a mobile twist in a highly competitive setting.'
    },
    {
        image: 'https://bcassetcdn.com/public/blog/wp-content/uploads/2020/08/14151332/header-30-gaming-logos-for-valorant-clans-brandcrowd-blog.png',
        title: 'Valorant',
        description: 'Show off your tactical skills in this 5v5 hero shooter that combines strategy with precision.'
    },
    {
        image: 'https://thumbs.dreamstime.com/b/fortnite-logo-fortnite-logo-white-background-vector-format-available-ai-271044682.jpg',
        title: 'Fortnite',
        description: 'Build, battle, and survive in one of the most popular games on the planet.'
    },
    {
        image: 'https://www.pngplay.com/wp-content/uploads/10/Clash-Royale-Logo-PNG-HD-Photos.png',
        title: 'Clash Royale',
        description: 'Strategize your way to victory in this fast-paced, real-time strategy game.'
    }
];

const cards = [
    {
        title: "Our vision",
        discription: ( <p>Our goal is to create a vibrant community where both casual and pro gamers can come together and thrive. We aim to foster a competitive but friendly environment that nurtures talent, encourages teamwork, and celebrates gaming culture.</p>)
    },
    {
        title: "What We Offer",
        discription: ( <div className="game-cards">
           {games.map((game, index) => (
                    <GameCard
                        key={index}
                        image={game.image}
                        title={game.title}
                        description={game.description}
                    />
                ))}
        </div>)
       
    },
    {
        title:"Why Play With Us?",
        discription: (
            <ul>
                <li>Regular Tournaments: We host weekly and monthly tournaments across multiple game titles with attractive prize pools.</li>
                <li>Fair Play: Our system ensures a fair and transparent competition environment, supported by active moderation and anti-cheat mechanisms.</li>
                <li>Global Community: Play with competitors from all over the world and make new friends while you’re at it.</li>
                <li>Exciting Rewards: From cash prizes to exclusive in-game items, we offer a wide range of rewards for the best players.</li>
            </ul>
        )
    }
]







function About() {
    return (
        
        <div>
           
           <Navbar/>

            <div className='aboutcontainer'>
           

                <div className='aboutcontent'>

                    <div className="head">
                        <h1>About us</h1>
                    </div>
                    <p className='abpara'>Welcome to Esport, your ultimate destination for competitive esports tournaments!
                        We are passionate about bringing gamers from around the globe together to compete, have fun, and showcase
                        their skills in some of the worlds most popular and thrilling games. <p>At Esport, we offer a dynamic platform where you can participate
                            in tournaments for top esports titles, win exciting prizes, and build your reputation as a competitive gamer</p>.</p>


                </div>

            </div>


            <div className="Abcardcontainer">
                {cards.map((carddetails) => {

                    return <Abcard

                        title={carddetails.title}
                        discription={carddetails.discription}
                        
                    />

                })}

            </div>
            <Footer/>
           



        </div>
    )
}

export default About