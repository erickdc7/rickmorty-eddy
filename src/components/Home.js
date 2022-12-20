import React, { useEffect } from 'react'
import RickAndMortyImage from '../rick-and-morty-image.jpg';
import '../home.css'
import Footer from './Footer';
import ScrollUp from './ScrollUp';
import { Link } from 'react-router-dom';

const Home = () => {
    useEffect(() => {
        document.title = 'Rick and Morty API';
    }, [])


    return (
        <>
            {/* <!--==================== MAIN ====================--> */}
            <main className="main">
                {/* <!--==================== HOME ====================--> */}
                <section className="home">
                    <div className="home__container container grid">
                        <div className="home__info">
                            <span className="home__span">
                                TV series
                            </span>
                            <h1 className="home__title">
                                Rick and Morty
                            </h1>
                            <p className="home__description">
                                After being missing for almost 20 years, Rick Sanchez shows up unexpectedly on his daughter
                                Beth's doorstep and moves in with her and her family, using the garage as his personal
                                laboratory.
                            </p>
                            {/* <a href="#" className="home__button">EXPLORE</a> */}
                            {/* <button className="home__button">EXPLORE</button> */}
                            <Link to="/rickmorty-eddy/characters" className="home__button">EXPLORE</Link>
                            <p className="home__info">
                                In this TV series you will find
                            </p>
                            <div className="home__data grid">
                                <div>
                                    <h2 className="home__data-number">51</h2>
                                    <span className="home__data-subtitle">Episodes</span>
                                </div>

                                <div>
                                    <h2 className="home__data-number">826</h2>
                                    <span className="home__data-subtitle">Characters</span>
                                </div>

                                <div>
                                    <h2 className="home__data-number">126</h2>
                                    <span className="home__data-subtitle">Locations</span>
                                </div>
                            </div>
                        </div>

                        <div className="home__img">
                            <img src={RickAndMortyImage} alt="rick and morty" />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <ScrollUp />
        </>
    )
}

export default Home