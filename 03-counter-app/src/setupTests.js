
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json';


Enzyme.configure({ adapter: new Adapter() });

// add createSerializer for parse Enzyme and understantd it 
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

// this libre extendes the features of expect
// import '@testing-library/jest-dom/extend-expect';
