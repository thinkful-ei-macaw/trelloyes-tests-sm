import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import List from './List'

describe ('<List />', () => {

  const arr = [{ id: 'a', title: 'First card', content: 'lorem ipsum' },
    { id: 'b', title: 'Second card', content: 'lorem ipsum' }];

  it('renders without crashing', () => {
    const div = document.createElement
    ('div');

    ReactDOM.render(<List header="head" cards={arr} />, div);
    ReactDOM.unmountComponentAtNode(div);

  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List header="head" cards={arr}/>)
      .toJSON();
    expect(tree).toMatchSnapshot(); 
  });

})