import React, { Component } from "react"
import Button from "./button/button"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button text="按钮" onClick={() => console.log("我点了！")} />
      </div>
    )
  }
}

export default App
