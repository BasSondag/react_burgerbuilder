import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({adapter: new Adapter()});


describe('<NavigationItems />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });
  it('It should render two <NavagationItem /> elements if not authenticated', () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });
  it('It should render three <NavagationItem /> elements if authenticated', () => {
    wrapper.setProps({isAuthenticated: true})
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });
  it('It should hav <NavagationItem link="/">Logout</NavigationItem> element if authenticated', () => {
    wrapper.setProps({isAuthenticated: true})
    expect(wrapper.contains(<NavigationItem link='/logout'>Logout</NavigationItem>)).toEqual(true);
  });
});
