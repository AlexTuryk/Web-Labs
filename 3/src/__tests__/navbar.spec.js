import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests';
import * as enzyme from 'enzyme';
import Navbar from '../components/Navbar/navbar';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

describe('<Navbar />', () => {
	it('renders without crashing', () => {
		shallow(<Navbar />);
	});
});