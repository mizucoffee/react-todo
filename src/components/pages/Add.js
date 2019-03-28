import React from 'react'
import Header from '../parts/Header'
import { addTodo } from '../../services/todo'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { inputTask, addTask } from '../../actions/tasks'

function Add(props) {
  function handleInput(e) {
    props.inputTask(e.target.value)
  }

  function handleClick(e) {
    console.log(props.input_text)
    addTodo(props.input_text)
      .then(result => props.history.push('/list'))
      .catch(e => {console.err(e);props.history.push('/list')})
  }

  return (
    <div>
      <Header />
      <h2>Add</h2>
      <input type="text" onChange={handleInput} />
      <button onClick={handleClick}>追加</button>
      <button onClick={e => props.history.push('/list')}>戻る</button>
    </div>
  )
}

// StateをPropsに混ぜる
function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    input_text: state.input_text
  }
}

// Dispatch関数をPropsに混ぜる
function mapDispatchToProps(dispatch) {
  return {
    addTask: task => dispatch(addTask(task)),
    inputTask: text => dispatch(inputTask(text)),
  }
}

// withRouterを使うとpropsにHistoryが渡される
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add))