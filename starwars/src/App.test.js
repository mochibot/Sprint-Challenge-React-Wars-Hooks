import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import CharacterList from './components/CharacterList';

describe('<App />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });
})

describe('<CharacterList />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<CharacterList />).toJSON();

    expect(tree).toMatchSnapshot();
  });
})