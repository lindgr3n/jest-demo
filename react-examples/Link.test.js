// Link.react-test.js
import React from 'react';
import Link from './Link';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Enzyme variant', () => {
    const component = shallow(
        <Link page="http://www.facebook.com">Facebook</Link>
    );
    const alink = component.find('a')
    expect(component).toMatchSnapshot()
    
    alink.simulate('mouseEnter')
    expect(component).toMatchSnapshot()
    alink.simulate('mouseLeave')

    expect(alink.prop('className')).toEqual('normal')
})

it('Empty link', () => {
    const component = shallow(
        <Link>Undefined</Link>
    );
    const alink = component.find('a')
    expect(alink.prop('href')).toEqual('#')
})