import React from 'react';
import * as enzyme from 'enzyme';
import { shallow } from 'enzyme';
import '../setupTests';
import LoginForm from '../components/Forms/login';
import Adapter from 'enzyme-adapter-react-16';

 enzyme.configure({ adapter: new Adapter() });
 
	describe('<LoginForm />', () => {
		it('renders without crashing', () => {
			shallow(<LoginForm />);
		});
	})