import React from 'react';
import SearchBox from './searchbox'
import CardList from './cardlist.jsx';
import Scroll from './scroll.jsx'



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    let filteredRobots = this.state.robots.filter((robot) => robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()))

    if (this.state.robots.length === 0)
      return <h1>Loading</h1>
    else {
      return (
        <div className="tc">
          <h1>Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      )
    }

  }

}

export default App
