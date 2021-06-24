import React from "react";
import {
  Col,
  Container,
  Row
} from "reactstrap";

import Code from "../../components/Code";

const Context = () => (
  <div id="context-api" className="mb-5">
    <h3>Context API</h3>
    <p className="text-lg">
      Context provides a way to pass data through the component tree without 
      having to pass props down manually at every level.
    </p>

    <p className="text-lg">
      In a typical React application, data is passed top-down (parent to child) 
      via props, but this can be cumbersome for certain types of props (e.g. 
      locale preference, UI theme) that are required by many components within 
      an application. Context provides a way to share values like these between 
      components without having to explicitly pass a prop through every level 
      of the tree.{" "}
      <a href="https://reactjs.org/docs/context.html" target="_blank" rel="noopener noreferrer">Learn more</a>.
    </p>
  </div>
);

const Redux = () => (
  <div id="redux" className="mb-5">
    <h3>Redux</h3>
    <p className="text-lg">
      Redux is a predictable state container for JavaScript apps.
    </p>

    <p className="text-lg">
      It helps you write applications that behave consistently, run in 
      different environments (client, server, and native), and are easy to 
      test. On top of that, it provides a great developer experience, such 
      as{" "}
      <a href="https://github.com/reduxjs/redux-devtools" target="_blank" rel="noopener noreferrer">
        live code editing combined with a time traveling debugger
      </a>.
    </p>

    <p className="text-lg">
      <a href="https://redux.js.org/introduction/getting-started" target="_blank" rel="noopener noreferrer">
        Learn more about Redux »
      </a>.
    </p>
  </div>
);

const ReduxActions = () => (
  <div id="actions" className="mb-5">
    <h4>Actions</h4>
    <p className="text-lg">
      Actions are payloads of information that send data from your application 
      to your store. They are the only source of information for the store. 
      Here's an example action which represents adding a new todo item:
    </p>

    <p className="text-lg">
      <code>redux/constants.js</code>
    </p>
    <Code>const ADD_TODO = 'ADD_TODO'</Code>

    <p className="text-lg">
      <code>redux/actions/todoActions.js</code>
    </p>
    <Code>{`import * as types from '../constants';

export function addTodo(value) {
  return {
    type: types.ADD_TODO,
    payload: value
  }
}`}</Code>

    <p className="text-lg">
      How to dispatch an action:
    </p>

    <Code>{`import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions/todoActions';

const DemoComponent = function() {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(addTodo('My first todo item'))}>Click me!</Button>
  )
}`}</Code>
  </div>
);

const ReduxReducers = () => (
  <div id="reducers" className="mb-5">
    <h4>Reducers</h4>
    <p className="text-lg">
      Reducers specify how the application's state changes in response to actions 
      sent to the store. Remember that actions only describe what happened, but 
      don't describe how the application's state changes.
    </p>

    <p className="text-lg">
      <code>redux/reducers/todoReducer.js</code>
    </p>
    <Code>{`import * as types from '../constants';

const initialState = [
  {
    text: "Initial todo item",
    completed: true
  }
]

export default function reducer(state = initialState, actions) {
  switch (actions.type) {

    case types.ADD_TODO:
      return [
        ...state,
        {
          text: actions.payload,
          completed: false
        }
      ]

    default:
      return state
  }
}`}</Code>

    <p className="text-lg">
      Note: Reducers can be registered by adding them to the array in the{" "}
      <code>redux/reducers/index.js</code> file.
    </p>
  </div>
);

const ReduxStore = () => (
  <div id="store" className="mb-5">
    <h4>Store</h4>
    <p className="text-lg">
      In the previous sections, we defined the actions that represent the facts 
      about “what happened” and the reducers that update the state according to 
      those actions. The Store is the object that brings them together.
    </p>

    <p className="text-lg">
      It's important to note that you'll only have a single store in a Redux 
      application. When you want to split your data handling logic, you'll use{" "}
      <a href="https://redux.js.org/basics/reducers#splitting-reducers" target="_blank" rel="noopener noreferrer">reducer composition</a>{" "}
      instead of many stores.
    </p>

    <p className="text-lg">
      Demo component showing values from the store:
    </p>
    <Code>{`import { connect } from 'react-redux';

const DemoComponent = ({ todos }) => (
  <ul>
    { todos.map((todo) => <li>{todo}</li>) }
  </ul>
)

export default connect(store => ({ todos: store.todoReducer }))(DemoComponent);`}</Code>
  </div>
);

const StateManagement = () => (
  <Container fluid className="p-0">
    <Row>
      <Col lg={10} xl={8} className="mx-auto">
        <h1 className="h3">State Management</h1>
        <hr className="my-4" />
        <Context />
        <Redux />
        <ReduxActions />
        <ReduxReducers />
        <ReduxStore />
      </Col>
    </Row>
  </Container>
);

export default StateManagement;
