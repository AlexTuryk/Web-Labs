import React from 'react';
import * as enzyme from 'enzyme';
import { shallow } from 'enzyme';
import '../setupTests';
import Calendar from '../components/Calendar/calendar';
import Adapter from 'enzyme-adapter-react-16';

 enzyme.configure({ adapter: new Adapter() });
 
	describe('<Calendar />', () => {
		it('renders without crashing', () => {
			shallow(<Calendar />);
		});
	})
