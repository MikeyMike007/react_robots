import React, { useEffect, useState } from 'react';
import SearchBox from '../components/searchbox'
import CardList from '../components/cardlist'
import Scroll from '../components/scroll'


function App() {

  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfield] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users))
  }, [count]) 
  // Important in this case to add [] to avoid infinite loop since
  // you call setRobots in the useEffect hook.
  // With [], useEffect will only run when app mounts
  // [count], means only run useEffect when count changes



  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }


  let filteredRobots = robots.filter((robot) => robot.name.toLowerCase().includes(searchfield.toLowerCase()))

  return !robots.length
    ?
    <h1>Loading</h1>
    :
    (<div className="tc">
      <h1>Robofriends</h1>
      <br />
      <button onClick={() => setCount(count+1)}>Click me</button>
      <br />
      <h1>Count: {count}</h1>
      <br/>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
    )
}



export default App
