import React from 'react';
import SearchBox from '../components/searchbox'
import CardList from '../components/cardlist'
import Scroll from '../components/scroll'
import ErrorBoundry from '../components/ErrorBoundry';



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
    const { robots, searchfield } = this.state
    let filteredRobots = robots.filter((robot) => robot.name.toLowerCase().includes(searchfield.toLowerCase()))

    return !robots.length
      ?
      <h1>Loading</h1>
      :
      (<div className="tc">
        <h1>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
      )
  }

}


export default App
