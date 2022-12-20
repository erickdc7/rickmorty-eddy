import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../error404.css'

const Error404 = () => {
    useEffect(() => {
        document.title = 'Rick and Morty API | Error 404';
    }, [])

    return (
        <>
            <section className='homeEr'>
                <div className="home__containerEr container  ">
                    <h1 className="home__titleEr">Error 404</h1>
                    <p className="home__descriptionEr">Are you lost? 😕</p>
                    <Link to="/rickmorty-eddy" className="nav__linkEr">GO HOME</Link>
                </div>
            </section>
        </>
    )
}

export default Error404