import React, { Component } from 'react';
import { objectEqual } from './helper';

class TaskContainer extends Component {
  state = {
    tasks: []
  }
  componentDidMount() {
    const tasks = []
    for (let i = 0; i < 10; i++) {
        tasks.push({
            name: `Task ${i}`,
            isFinish: Math.random() > 0.5
        })
    }
    this.setState({ tasks })
  }
  addTask = newTask => {
    this.setState({
        tasks: [...this.state.tasks, newTask]
    })
  }
  render() {
    console.log('TaskContainer Render')
    return (
        <div>
            <AddTask onAdd={this.addTask}/>
            <TaskList tasks={this.state.tasks} />
        </div>
    )
  }

}

class AddTask extends Component {
  state = {
      name: ''
  }
  handleChange = e => {
      this.setState({ name: e.target.value })
  }
  addTask = () => {
      this.props.onAdd && this.props.onAdd({
          name: this.state.name,
          isFinish: false
      })
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (objectEqual(this.props, nextProps) &&     objectEqual(this.state, nextState)) {
      return false
    }
    return true
  }
  render() {
      console.log('AddTask Render')
      return (
          <div>
              <input type="text" value={this.state.name} onChange={this.handleChange} />
              <button onClick={this.addTask}>Add Task</button>
          </div>
      )
  }
}

class TaskList extends Component {
  render() {
      console.log('TaskList Render')
      const ts = this.props.tasks.map((task, i) => <Task key={i} {...task} />)
      return ( <ul> {ts} </ul> )
  }
}

class Task extends Component {
  render() {
      console.log('Task Render')
      const {name, isFinish} = this.props
      {/* 通过类名样式区分是否是完成状态 */}
      return <li className={isFinish ? "finish" : ""}>{name}</li>
  }
}

function App() {
  return (
    <>
      <TaskContainer />
    </>
  )
}

export default App;