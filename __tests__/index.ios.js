import 'react-native';
import React from 'react';
import Index from '../index.ios_OLD.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Index />
  );
});
