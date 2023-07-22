import React from 'react';
//import { getQueriesForElement } from '@testing-library/react';
import {render, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
//import * as ReactDOM from 'react-dom'; don't need this since we are not accessing the DOM in the render function any longer.
import App from './App';

/*function render (component) { //no longer need this function since we imported {render}
  const root = document.createElement('div');
  ReactDOM.render(component, root);
  //above creates an element called 'root' that renders the component.
  return getQueriesForElement(root);
}*/
test('ToDo', () => {
  const {getByText, getByLabelText} = render(<App/>);
  
  //use DOM APIs (query selector) to make assertions.
  expect(getByText('ToDo')).not.toBeNull();
  expect(getByText('Add #1')).not.toBeNull();
  expect(getByLabelText('Add Todo:')).not.toBeNull();
});

test('Add items to list', () => {
  const {getByText, getByLabelText} = render(<App/>);
  
  //after rendering the component
  getByText('ToDo');
  const input = getByLabelText('Add Todo:');
  fireEvent.change(input, {target:{value:'wash car'}});
  fireEvent.click(getByText('Add #1'));
  fireEvent.change(input, {target:{value:'wash hair'}});
  fireEvent.click(getByText('Add #2'));

  //confirm data
  getByText('wash car');
  getByText('Add #3');
  getByText('wash hair');
});

//userEvent expresses intent better
test('user-events allows users to add...', () => {
  const {getByText, getByLabelText} = render(<App/>);
  const input = getByLabelText('Add Todo:');
  const button = getByText('Add #1');

  userEvent.type(input, "Learn Spanish");
  userEvent.click(button);

  getByText("Learn Spanish");
  getByText('Add #2');
});