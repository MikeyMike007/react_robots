import React from 'react';
import SearchBox from './searchbox'
import CardList from './cardlist.jsx';
import { robots } from './robots.js'



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: '',
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render() {
    let filteredRobots = this.state.robots.filter((robot) => robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()))
    return (
      <div className="tc">
        <h1>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots} />
      </div>
    )
  }

}

export default App
