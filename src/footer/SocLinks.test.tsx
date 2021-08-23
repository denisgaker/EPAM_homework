import * as React from 'react';
import * as renderer from 'react-test-renderer';
import SocLinks from './SocLinks';

test('Social network links', () => {
  const component = renderer.create(<SocLinks />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
