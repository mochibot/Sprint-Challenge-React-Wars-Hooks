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

const sampleCharList = [
  {
    name: 'Some name',
    mass: 'some number',
    hair_color: 'some color',
    skin_color: 'some color',
    birth_year: 'some number',
    films: [{
      url: 'some URL',
      title: 'some title'
    }]
  }
]

describe('<CharacterList />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<CharacterList characters={sampleCharList}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
})