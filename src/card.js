import React, { Component } from 'react';
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="bloc">
            {this.props.movies&&this.props.movies.filter(el=>el.name.toLowerCase().includes(this.props.input.toLowerCase().trim())&&el.rating<this.props.star).map(
                el=> {return (
                <div className="partie" >                       
                    <p>{el.name}</p>
                    <p className="etoile">{"".padEnd(el.rating,"⭐")}</p>
                    <img src={el.img}/>
                </div>
            )})}
        </div> );
    }
}
export default Card;
