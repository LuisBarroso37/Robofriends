import { shallow } from 'enzyme';
import MainPage from './MainPage';
import React from 'react';

let wrapper;

describe('MainPage component', () => {
    // Ran before each test
    beforeEach(() => {
        const mockProps = {
            onRequestRobots: jest.fn(),
            robots: [],
            searchField: '',
            isPending: false
        }

        wrapper = shallow(<MainPage {...mockProps}/>);
    });

    it('render MainPage without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('Filter robots correctly', () => {
        const mockProps2 = {
            onRequestRobots: jest.fn(),
            robots: [{
                id: 3,
                name: 'John',
                email: 'john@gmail.com'
            }],
            searchField: 'john',
            isPending: false
        }
        const wrapper2 = shallow(<MainPage {...mockProps2}/>);
        expect(wrapper2.instance().filterRobots()).toEqual(mockProps2.robots);
    });

    it('Filter robots null when searchField doesn\'t match any robot', () => {
        const mockProps2 = {
            onRequestRobots: jest.fn(),
            robots: [{
                id: 3,
                name: 'John',
                email: 'john@gmail.com'
            }],
            searchField: 'a',
            isPending: false
        }
        const wrapper2 = shallow(<MainPage {...mockProps2}/>);
        expect(wrapper2.instance().filterRobots()).toEqual([]);
    });

    it('different render when isPending is true', () => {
        const mockProps3 = {
            onRequestRobots: jest.fn(),
            robots: [{
                id: 3,
                name: 'John',
                email: 'john@gmail.com'
            }],
            searchField: 'a',
            isPending: true
        };

        wrapper = shallow(<MainPage {...mockProps3}/>);

        expect(wrapper).toMatchSnapshot();
    });
});