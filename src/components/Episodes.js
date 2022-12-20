import React, { useEffect, useState } from 'react'
import '../episodes.css'
import Footer from './Footer'
import Pagination from './Pagination'
import ScrollUp from './ScrollUp'

const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    const [search, setSearch] = useState("")
    const [info, setInfo] = useState({});

    const api = `https://rickandmortyapi.com/api/episode/?name=${search}`;

    const fetchEpisodes = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                //console.log(data.results);
                //console.log(data.info);
                setEpisodes(data.results);
                setInfo(data.info);
            })
            .catch(error => console.log(error))
    };

    useEffect(() => {
        fetchEpisodes(api);
        document.title = 'Rick and Morty API | Episodes';
    }, [api])


    /* Pagination */
    const onPrevious = () => {
        fetchEpisodes(info.prev);
    }

    const onNext = () => {
        fetchEpisodes(info.next);
    }

    return (
        <>
            <main className="main">
                <section className="homeE">
                    <div className="home__containerE container grid">
                        <h1 className="home__titleE">
                            Rick and Morty - Episodes
                        </h1>
                        <form className="home__formE">
                            <input
                                type="text"
                                placeholder="Episodes..."
                                className="home__form-inputE"
                                onChange={e => {
                                    setSearch(e.target.value)
                                }}
                            />
                            <button
                                className="home__buttonE"
                                onClick={e => { e.preventDefault() }}
                            >
                                SEARCH
                            </button>
                        </form>
                        <div className="home__episodesE grid">
                            {
                                episodes === undefined
                                    ? (
                                        <p>Episode not found. <br />Maybe you wrote it wrong, try again, please. 😉</p>
                                    )
                                    : (
                                        episodes.map((item, index) => {
                                            return (
                                                <div className="home__episodeE" key={index}>
                                                    <div className="home__episode-noE">
                                                        <h1>{item.id}</h1>
                                                        <span>Episode</span>
                                                    </div>
                                                    <div className="home__episode-dataE">
                                                        <ul className="home__episode-infoE">
                                                            <li>Name: <span>{item.name}</span></li>
                                                            <li>Air date: <span>{item.air_date}</span></li>
                                                            <li>Season: <span>{item.episode}</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    )
                            }

                        </div>
                        {
                            episodes && (
                                <Pagination
                                    prev={info.prev}
                                    next={info.next}
                                    onPrevious={onPrevious}
                                    onNext={onNext}
                                />
                            )
                        }
                    </div>
                </section>
            </main>
            <Footer />
            <ScrollUp />
        </>
    )
}

export default Episodes