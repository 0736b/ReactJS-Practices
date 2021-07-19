import React from 'react';

const SearchBox = ({searchfiled,searchChange}) => {
    return (
        <div className="pa2">
        <input className="pa3 ba br3 bg-white" type="search" placeholder="search robot" onChange={searchChange} />
        </div>
    );
}

export default SearchBox;