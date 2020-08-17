import React, {Component} from 'react'
import Movies from './counter' 

export default class Counters extends Component {

    state = {
        movies:[
            {id:1, value:0},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0},
            {id:5, value:0},
        ]
    }

    handlerDelete = () =>{
        console.log('Event Handler Delete')
    }

    render() {
        return (
        <div>
            {this.state.movies.map(movie => (
                <Movies key = {movie.id} onDelete={this.handlerDelete} value={movie.value} selected='true'/>
            ))}
        </div>
            );
    }

}