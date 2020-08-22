import { shallow } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';
import React from 'react';

it('expect to render ErrorBoundary component', () => {
    expect(shallow(<ErrorBoundary />)).toMatchSnapshot();
});

it('expect hasError initial state to be false', () => {
    const wrapper = shallow(<ErrorBoundary />).instance();

    expect(wrapper.state.hasError).toEqual(false);
});

it('expect hasError state to be true if componentDidCatch is run', () => { 
    const wrapper = shallow(<ErrorBoundary />);
    wrapper.setState({ hasError: true });
    
    expect(wrapper).toMatchSnapshot();
});