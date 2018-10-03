/* eslint-disable no-undef */

import React from 'react';
import { shallow } from 'enzyme';

import App from '../../components/App';

const wrapper = shallow(<App />);

describe('App Component UI', () => {
  it('should render a react component', () => {
    expect(wrapper.length).toBe(1);
  });
});
