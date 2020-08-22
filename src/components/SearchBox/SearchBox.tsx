import React from 'react';
import { ISearchBoxProps } from '../../interfaces';

const SearchBox = ({ searchChange }: ISearchBoxProps) => {
    return (
        <div className='pa2'>
            <input
                aria-label='Search Robots'
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='Search robots'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;