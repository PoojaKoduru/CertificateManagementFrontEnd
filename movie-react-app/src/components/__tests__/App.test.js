import{render,screen,cleanup} from '@testing-library/react'
import renderer  from 'react-test-renderer';
import '@testing-library/jest-dom'
import AllMovies from '../pages/AllMovies';
import NewMovieForm from '../movies/NewMovieForm'

afterEach(()=>cleanup())
test('should display text',()=>{
    render(<AllMovies/>);
    const headingElement = screen.getByText('All Movies Page')
    expect(headingElement).toBeInTheDocument
})

test('match snapshot',()=>{
    const tree = renderer.create(<AllMovies/>).toJSON;
    expect(tree).toMatchSnapshot();
})

test('to contain Html elements in  a field',()=>{
    render(<NewMovieForm/>)
    const boxElement = screen.getByTestId('field')
    expect(boxElement).toContainHTML('label')
    expect(boxElement).toContainHTML('textarea')
    expect(boxElement).not.toContainHTML('form')
})

test('to contain Html elements in a form',()=>{
    render(<NewMovieForm/>)
    const boxElement = screen.getByTestId('form')
    expect(boxElement).toContainHTML('label')
    expect(boxElement).toContainHTML('textarea')
    expect(boxElement).toContainHTML('div')
    expect(boxElement).toContainHTML('input')
})

