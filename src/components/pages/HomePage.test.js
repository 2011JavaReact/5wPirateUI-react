import HomePage from "./HomePage";
import { shallow } from "enzyme";
describe("Home Page Component",()=>{
    it("has a title", ()=>{
        const wrapper = shallow(<HomePage/>);
        expect(wrapper.find('#showcase-content')).toBeTruthy();
    })

})