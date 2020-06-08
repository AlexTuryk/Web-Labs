import React from 'react';
import * as enzyme from 'enzyme';
import { shallow } from 'enzyme';
import '../setupTests';
import EventForm from '../components/EventForm/App';
import Adapter from 'enzyme-adapter-react-16';

 enzyme.configure({ adapter: new Adapter() });
 
	describe('<EventForm />', () => {
		it('renders without crashing', () => {
			shallow(<EventForm />);
		});
	})