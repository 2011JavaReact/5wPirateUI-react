// import { render, screen } from '@testing-library/react';
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


import { shallow} from "enzyme";
import App from './App';


it('will render to the page', () =>{
  const wrapper = shallow(<App/>);
  expect(wrapper.find('#showcase-content')).toBeTruthy();
})
