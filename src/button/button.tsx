import React, { Component } from "react"
import abc from "classnames"
import "./button.less"

export interface ButtonOption {
  text?: string
  onClick?: () => void
}
export default class Button extends Component<ButtonOption, any> {
  render() {
    const { text, onClick } = this.props
    const classes = abc({
      primary: true,
      light: false
    })
    return (
      <div className={classes} onClick={onClick}>
        {text}
      </div>
    )
  }
}
