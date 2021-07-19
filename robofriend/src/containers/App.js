import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";


class App extends React.Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfiled: '',
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(users => {
            this.setState({ robots: users});
        });
    }


    onSearchChange = (event) => {
       this.setState({searchfiled: event.target.value})
    }

    render(){
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfiled.toLowerCase());
        })
        if (this.state.robots.length === 0){
            return <h1>Loading</h1>
        }
        else{
        return (
            <div className="tc">
              <h1 className="white bg-red bb bt pa2">R O B O F R I E N D S</h1>
              <SearchBox searchChange = {this.onSearchChange} />
              <Scroll>
              <CardList robots={filteredRobots} />
              </Scroll>
            </div>
          );
        }
    }
}

export default App;
