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
      </div>
    );
  }
}

export default App;