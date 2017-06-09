## Redux-Modal-Container
[![Build Status](https://travis-ci.org/ionutmilica/redux-modal-container.svg?branch=master)](https://travis-ci.org/ionutmilica/redux-modal-container)
[![redux-modal-container](https://img.shields.io/npm/v/redux-modal-container.svg)](https://www.npmjs.com/package/redux-modal-container)

This library provides an easy way to show and hide modals when working with Redux.

## Installation
To install the latest version:

```
npm install --save redux-modal-container
```
or
```
yarn add redux-modal-container
```

## How to use

Create the modals entry point 
(Container component needs access to the Redux state):

```javascript
import { Container as ModalContainer } from 'redux-modal-container';
// ...
render(
  <Provider store={yourStore}>
    <Container 
      modals={{
        simple: () => <div>Modal 1</div>,
      }}
    />
    <MyComponent />
  </Provider>,
  document.findElementById('root')
)
```

Combine the modal reducer:
```javascript
import { modalReducer } from 'redux-modal-container';
// ...
export const rootReducer = combineReducers({
  modals: modalReducer,
});
```

Trigger the modal from your connected component:
```javascript
import { showModal } from 'redux-modal-container';
// ...

class MyComponent extends React.Component {
  trigger = () => {
    this.props.showModal('simple');
  };
  render() {
    return (
      <div>
        <button onClick={this.trigger}>Open modal</button>
      </div>
    );
  }
}

export default connect(null, dispatch =>
  bindActionCreators({ showModal }, dispatch),
)(MyComponent);
```

A full example can be found in [examples](https://github.com/ionutmilica/redux-modal-container/tree/master/example) directory.

### License
MIT
