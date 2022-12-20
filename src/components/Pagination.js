import React from 'react'
import '../pagination.css'

const Pagination = ({ prev, next, onPrevious, onNext }) => {
    const handlePrevious = () => {
        onPrevious();
    }

    const handleNext = () => {
        onNext();
    }

    return (
        <div className="container-button">
            {
                prev
                    ? (
                        <button className='button-pagination' onClick={handlePrevious}>Previous</button>
                    )
                    : (
                        <button className='button-pagination disabled' onClick={handlePrevious}>Previous</button>
                    )
            }
            {
                next
                    ? (
                        <button className='button-pagination' onClick={handleNext}>Next</button>
                    )
                    : (
                        <button className='button-pagination disabled' onClick={handleNext}>Next</button>
                    )
            }
        </div>
    )
}

export default Pagination