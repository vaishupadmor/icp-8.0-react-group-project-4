import React from 'react'
import "./About.css"
import Abcard from '../../Components/AboutCards/Abcard'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'



const cards = [
    {
        title: "Our vision",
        discription: ( <p>Our goal is to create a vibrant community where both casual and pro gamers can come together and thrive. We aim to foster a competitive but friendly environment that nurtures talent, encourages teamwork, and celebrates gaming culture.</p>)
    },
    {
        title: "What We Offer",
        discription: (<ul>
            <li>PUBG Mobile – Take on the battlefield and outlast your opponents in this thrilling battle royale.</li>
            <li>Garena Free Fire – Dive into fast-paced action in this game where only the smartest and fastest players survive.</li>
            <li>Call of Duty: Mobile – Experience the classic CoD action with a mobile twist in a highly competitive setting.</li>
            <li>Valorant – Show off your tactical skills in this 5v5 hero shooter that combines strategy with precision.</li>
            <li>Fortnite – Build, battle, and survive in one of the most popular games on the planet.</li>
            <li>Clash Royale – Strategize your way to victory in this fast-paced, real-time strategy game.</li>
        </ul>)
       
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