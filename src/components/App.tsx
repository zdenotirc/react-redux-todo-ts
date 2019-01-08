import * as React from 'react'
import AddTodo from '../containers/AddTodo'
import Todos from '../containers/Todos'
import { SimpleFormDemo } from '../containers/SimpleFormContainer'
// import { MyApp } from './FormikDemo'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <AddTodo />
        <Todos />

        <Tabs>
          <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
            <Tab>Title 3</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <SimpleFormDemo />
          </TabPanel>
          <TabPanel>
            <h2>AAA</h2>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default App;
