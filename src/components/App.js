import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }


  // onFindPetsClick = (e) => {
  //   this.setState({
  //     [e.state.filters.type]: this.props.value
  //   })
  // }

  // componentDidMount(){
  //   console.log("app mounted")

  //   fetch("http://localhost:3000//api/pets")
  //   .then(res => res.json())
  //   .then(json => {
  //     this.setState({pets: json})
  //     // this.setState(onFindPetsClick)
  //     //setState is key value pairs or a callback function that returns an object of the key value pairs
  //   })
  // }

  onChangeType = (e) => {
    this.setState({
      // [e.state.filters.type]: this.props.value
      filters: {
        type: e.target.value
      }
    })
  }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType}/>
              <Filters />
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
