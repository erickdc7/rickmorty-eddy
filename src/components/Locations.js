import React, { useEffect, useState } from 'react'
import '../locations.css'
import Footer from './Footer';
import Pagination from './Pagination';
import ScrollUp from './ScrollUp';

const Locations = () => {
    const [locations, setLocations] = useState([]);
    const [search, setSearch] = useState("")
    const [info, setInfo] = useState({});

    const api = `https://rickandmortyapi.com/api/location/?name=${search}`;

    const fetchLocations = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                //console.log(data.results);
                //console.log(data.info);
                setLocations(data.results);
                setInfo(data.info);
            })
            .catch(error => console.log(error))
    };

    useEffect(() => {
        fetchLocations(api);
        document.title = 'Rick and Morty API | Locations';
    }, [api])


    /* Pagination */
    const onPrevious = () => {
        fetchLocations(info.prev);
    }

    const onNext = () => {
        fetchLocations(info.next);
    }

    return (
        <>
            <main className="main">
                <section className="homeL">
                    <div className="home__containerL container grid">
                        <h1 className="home__titleL">
                            Rick and Morty - Locations
                        </h1>
                        <form className="home__formL">
                            <input
                                type="text"
                                placeholder="Locations..."
                                className="home__form-inputL"
                                onChange={e => {
                                    setSearch(e.target.value)
                                }}
                            />
                            <button
                                className="home__buttonL"
                                onClick={e => { e.preventDefault() }}
                            >
                                SEARCH
                            </button>
                        </form>
                        <div className="home__locationsL grid">
                            {
                                locations === undefined
                                    ? (
                                        <p>Location not found. <br />Maybe you wrote it wrong, try again, please. 😉</p>
                                    )
                                    : (
                                        locations.map((item, index) => {
                                            return (
                                                <div className="home__locationL" key={index}>
                                                    <div className="home__location-nameL">
                                                        <h2>{item.name}</h2>
                                                    </div>
                                                    <div className="home__location-dataL">
                                                        <ul className="home__location-infoL">
                                                            <li>Type: <span>{item.type}</span></li>
                                                            <li>Dimension: <span>{item.dimension}</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    )
                            }
                        </div>
                        {
                            locations && (
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

export default Locations