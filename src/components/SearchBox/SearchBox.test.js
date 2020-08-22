import { shallow } from 'enzyme';
import SearchBox from './SearchBox';
import React from 'react';

it('expect to render ErrorBoundary component', () => {
    expect(shallow(<SearchBox />)).toMatchSnapshot();
});