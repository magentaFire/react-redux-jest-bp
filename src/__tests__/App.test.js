import React from 'react';
import { shallow } from 'enzyme';
import App from '../app';

describe('first React component test with enzyme', () => {
	it('Renders without crashing', () => {
		shallow(<App />);
	});
});
