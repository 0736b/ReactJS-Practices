import React from 'react'

const Card = ({ name, email,id }) => { // destructuring props to name email id
    return (
        <div className="tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-1">
            <img src={`https://robohash.org/${id}?200x200`} alt='_photo'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;