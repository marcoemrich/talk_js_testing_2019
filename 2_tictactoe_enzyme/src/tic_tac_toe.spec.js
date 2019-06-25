import * as R from 'ramda'
import React from 'react'
import { shallow, mount, render } from 'enzyme';
import {Cell, Board} from './tic_tac_toe';

describe('Cell', () => {
  it('should render with a button with owner', () => {
    const wrapper = shallow(<Cell owner="X"/>);
    expect(wrapper.find('button').text()).toEqual('X');
  });

  it('should render with a button with owner', () => {
    const wrapper = shallow(<Cell cellNr={5} />);
    expect(wrapper.find('button').prop('data-cell-nr')).toEqual(5);
  });

  it('should call onClick handler', () => {
    const handler = jest.fn();
    const wrapper = shallow(<Cell onClick={handler}/>);
    wrapper.find('button').simulate('click');
    expect(handler).toBeCalled();
  })
}); 

describe('Board', () => {
  it('should have the right number of cells', () => {
    const wrapper = shallow(<Board x="4" y="4"/>);
    expect(wrapper.find(Cell).length).toEqual(16);
  });
});