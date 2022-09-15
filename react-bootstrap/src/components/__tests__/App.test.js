import{render,screen,cleanup} from '@testing-library/react'
import renderer  from 'react-test-renderer';
//import Box from '../Box'
import '@testing-library/jest-dom'
import App from '../../App'
import Box from '../Box';


afterEach(()=>cleanup())
test('should render App component',()=>{
    render(<App/>);
    const appElement = screen.getByText('React Testing')
    expect(appElement).toBeInTheDocument
})

test('should render Box component',()=>{
    render(<Box name='Box 1'/>)
    const boxElement= screen.getByTestId('Box 1')
    expect(boxElement).toBeInTheDocument;
    expect(boxElement).toHaveTextContent('Design simple')
})

test('to contain Button Html element',()=>{
    render(<Box name='Box 1'/>)
    const boxElement = screen.getByTestId('Box 1')
    expect(boxElement).toContainHTML('button')
    expect(boxElement).not.toContainHTML('form')
})

test('match snapshot',()=>{
    const tree = renderer.create(<Box name='Box 3'/>).toJSON;
    expect(tree).toMatchSnapshot();
})