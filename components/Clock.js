import React from 'react'

export default class Clock extends React.Component {
  state = { time: new Date() }
  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerId)
  }
  tick() {
    this.setState({ time: new Date() })
  }

  render() {
    return this.props.render({
      time: this.state.time,
    })
  }
}
