import { shallow } from 'enzyme';
import CardList from './Cardlist';
import React from 'react';

it('expect to render CardList component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John',
            email: 'john@gmail.com'
        },
        {
            id: 2,
            name: 'Jane',
            email: 'jane@gmail.com'
        },
        {
            id: 3,
            name: 'Amy',
            email: 'amy@gmail.com'
        }
    ];

    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
});