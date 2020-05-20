import React, { Component } from 'react'
import store from './store'   // global redux store
import { Provider } from 'react-redux'
import ListContainer from './components/ListContainer'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <main>
          <Provider store={store}>
            <ListContainer />
          </Provider>
        </main>
      </div>
    )
  }
}

export default App