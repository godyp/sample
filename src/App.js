import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        {
          id: 1,
          body: "とりあえず表示してみる"
        },
        {
          id: 2,
          body: "私たち、いずれ書き換えられる運命"
        }
      ]
    }
    this.changeText = this.changeText.bind(this)
    this.submitTask = this.submitTask.bind(this)
    this.fetchTasks = this.fetchTasks.bind(this)
  }

  componentWillMount(){
    this.fetchTasks()
  }

  fetchTasks(){
    fetch("http://localhost:3001/tasks") // データを取得しに行く
    .then( response => response.json() ) // json型のレスポンスをオブジェクトに変換する
    .then( json => { // オブジェクトに変換したレスポンスを受け取り、
      this.setState({ tasks: json }) // Stateを更新する
    })
  }

  changeText(e) {
    const inputText = e.target.value
    this.setState({ inputText: inputText })
    console.dir(inputText);
  }

  

  submitTask() {
    fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: "たかし",
        to: "珠子",
        body: this.state.inputText,
        craped: 0,
        date: "2020/01/23 13:53"
       })
    })
    .then( this.fetchTasks )
  }

  render() {
    return (
      <div className="App">
        <div className="tasks">
        {
          this.state.tasks.map( task => {
              return <div className="task" key={ task.id }>{ task.body }</div>
          })
        }
        </div>
        <div id="task-form">
          <input type="text" id="task-input" onChange={ this.changeText }/>
          <button id="submit" onClick={ this.submitTask }>submit</button>
        </div>
      </div>
    );
  }
}

export default App;