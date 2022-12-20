import React, { useEffect, useState } from 'react'
import '../characters.css'
import Footer from './Footer';
import Pagination from './Pagination';
import ScrollUp from './ScrollUp';

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [search, setSearch] = useState("")
    const [info, setInfo] = useState({});

    const api = `https://rickandmortyapi.com/api/character/?name=${search}`;

    const fetchCharacters = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                //console.log(data.results);
                //console.log(data.info);
                setCharacters(data.results);
                setInfo(data.info);
            })
            .catch(error => console.log(error))
    };

    useEffect(() => {
        fetchCharacters(api);
        document.title = 'Rick and Morty API | Characters';
    }, [api])


    /* Pagination */
    const onPrevious = () => {
        fetchCharacters(info.prev);
    }

    const onNext = () => {
        fetchCharacters(info.next);
    }

    return (
        <>
            <main className="main">
                <section className="homeC">
                    <div className="home__containerC container grid">
                        <h1 className="home__titleC">
                            Rick and Morty - Characters
                        </h1>
                        <form className="home__formC">
                            <input
                                type="text"
                                placeholder="Characters..."
                                className="home__form-inputC"
                                onChange={e => {
                                    setSearch(e.target.value)
                                }}
                            />
                            <button
                                className="home__buttonC"
                                onClick={e => { e.preventDefault() }}
                            >
                                SEARCH
                            </button>
                        </form>
                        <div className="home__charactersC grid">
                            {
                                characters === undefined
                                    ? (
                                        <p>Character not found. <br /> Maybe you wrote it wrong, try again, please. 😉</p>
                                    )
                                    : (
                                        characters.map((item, index) => {
                                            return (
                                                <div className="home__characterC" key={index}>
                                                    <div className="home__character-imgC">
                                                        <img src={item.image} alt="" />
                                                    </div>
                                                    <div className="home__character-dataC">
                                                        <div className="home__character-headerC">
                                                            <h2>{item.name}</h2>
                                                            <span>{item.status}</span>
                                                        </div>
                                                        <ul className="home__character-infoC">
                                                            <li>Species: <span>{item.species}</span></li>
                                                            <li>Type: <span>{item.type === "" ? "N/A" : item.type}</span></li>
                                                            <li>Gender: <span>{item.gender}</span></li>
                                                            <li>Origin: <span>{item.origin.name}</span></li>
                                                            <li>Location: <span>{item.location.name}</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    )
                            }
                        </div>
                        {
                            characters && (
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

export default Characters