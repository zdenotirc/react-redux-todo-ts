import { connect } from 'react-redux'
import { State } from '../reducers'
import { getTodos } from '../selectors/todos'
import { fetchData } from '../actions/datas'
import TodosList from '../components/TodosList'

const mapStateToProps = (state: State) => ({
  todos: getTodos(state),
  datas: fetchData()
})

const mapDispatchToProps = {
  onTodoClicked: fetchData
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(TodosList)