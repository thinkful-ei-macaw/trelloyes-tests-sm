import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import List from './List'

describe ('<List />', () => {

  it('renders without crashing', () => {
    const div = document.createElement
    ('div');

    const arr = [{ id: 'a', title: 'First card', content: 'lorem ipsum' },
    { id: 'b', title: 'Second card', content: 'lorem ipsum' }]

    ReactDOM.render(<List header="head" cards={arr} />, div);

    ReactDOM.unmountComponentAtNode(div);

  })
})