import * as React from 'react'
import AddTodo from '../containers/AddTodo'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <AddTodo />
      </div>
    );
  }
}

export default App;
