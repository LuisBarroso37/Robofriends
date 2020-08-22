import { shallow } from 'enzyme';
import CardList from './Cardlist';
import React from 'react';

it('expect to render CardList component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            username: 'JohnJohn',
            email: 'john@gmail.com'
        }
    ];

    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
});