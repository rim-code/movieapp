import React, { Component } from 'react';
import './App.css'
import Card from './card';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      img: "",
      rating: 0,
      search: "",
      movielist: [],
      star: 5,
      display :false
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  star=(e)=> {
    this.setState({
      star:e
    })
  }
  add=()=> {
    this.setState ({
      movielist : [...this.state.movielist,{name:this.state.name , img:this.state.img , rating:this.state.rating}], 
      display : !this.state.display
    })
  }
  render() {
    return (<div>
      <header>
        <input type='text' placeholder="Search" onChange={(e) => this.setState({ search: e.target.value })} />
        <span onClick ={()=>this.star(1)}>⭐</span>
        <span onClick ={()=>this.star(2)}>⭐</span>
        <span onClick ={()=>this.star(3)}>⭐</span>
        <span onClick ={()=>this.star(4)}>⭐</span>
        <span onClick ={()=>this.star(5)}>⭐</span>
      </header>
       <Card input ={this.state.search} star = {this.state.star} movies = {this.state.movielist} />
      <p onClick ={()=>this.setState({display:!this.state.display})}>+</p>
      <div className ={this.state.display ? "display":"hidden"}>
        <input type="text" placeholder="name" name="name" onChange={this.handleChange} />
        <input type="text" placeholder="Img" name="img" onChange={this.handleChange} />
        <input type="text" placeholder="rating" name="rating" onChange={this.handleChange} />
        <button onClick={this.add}>Add</button>
      </div>
    </div>);
  }
}
export default App;