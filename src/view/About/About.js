import React from 'react'
import "./About.css"
import Abcard from '../../component/Aboutcards/Abcard'



const cards=[
    {
        title: "our vision",
        discription: "ladfosadf"
    }
]







function About() {
    return (
        <div>

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



        </div>
    )
}

export default About