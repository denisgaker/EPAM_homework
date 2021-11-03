import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Copyright from './Copyright';

test('Copyright information', () => {
  const component = renderer.create(<Copyright name="HETflix" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
