import { shallow } from 'enzyme';
import Header from './Header';
import React from 'react';

it('expect to render Header component', () => {
    expect(shallow(<Header />)).toMatchSnapshot();
});

it('expect shouldComponentUpdate to be false', () => {
    const wrapper = shallow(<Header />).instance();

    expect(wrapper.shouldComponentUpdate()).toEqual(false);
});