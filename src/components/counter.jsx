import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

export default  class Movies extends Component{

    state = {
        movies:getMovies(),
        firstObj:getMovies()[0]
    };
    heandleDelet = (moviee) => {
        const movies = this.state.movies.filter(m => m._id !== moviee._id);
        this.setState({movies});
    }

    render(){
        if (this.state.movies.length ===0) return <p>There is no film</p>

        return <div className="container"> <p>showing {this.state.movies.length} in database</p> <table className="table">
            
        <thead> 
            <tr>
                <th >Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th></th>
            </tr>
        </thead> 
            
            <tbody>
                {this.state.movies.map(movie => (
                <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                        <button onClick={() => this.heandleDelet(movie)} className = "btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
                ))}
            </tbody>
        
        </table>
        </div>
        


    }

    

}



// class Counter extends Component {
//     state = {
//         count:0,
//         imageUrl: 'https://picsum.photos/200',
//         tags:['tag1','tag2','tag3','tag4','tag5']
//     };
//     render() { 

//         // React.createElement('div')
//         return(
//         <React.Fragment>
//             <img src={this.state.imageUrl} alt=""></img>
//             <span className={this.getBadgeClass()}>{this.formatCount()}</span>
//             <button className = "btn btn-secondary btn-sm">Increment</button>
//             <ul>
//                { this.state.tags.map(tag => <li key={tag}>{tag}</li>) }
//             </ul>
//         </React.Fragment>
//         );
//     }

//     getBadgeClass() {
//         let classes = "badge m-2 badge-";
//         classes += this.state.count === 0 ? "warning" : "primary";
//         return classes
//     }

//     formatCount(){
//         const {count} = this.state;
//         return count === 0 ? 'zero' : count;
//     }
// }


// class Counter extends Component {
//     state = {
//         count:0,
//         imageUrl: 'https://picsum.photos/200',
//         movies:getMovies()
//     };

//     // constructor(){
//     //     super();
//     //     this.handleIncrement = this.handleIncrement.bind(this);
//     // }

//     renderTags(){
//         if (this.state.tags.length===0) return <p>There is no tag</p>;

//         return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
//     }

//     handleIncrement = product =>{
//         console.log(product);
//         this.setState({count:this.state.count + 1});
//     }

//     render() { 

//         // React.createElement('div')
//         return(
//         <div>
//             {this.state.tags.length===0 && 'Please create a new tag'}
//             {this.renderTags()}
//             <span className={this.getBadgeClass()}>{this.formatCount()}</span>
//             <button onClick={ () => this.handleIncrement({id:1})} className = "btn btn-secondary btn-sm">Increment</button>
//         </div>
//         );
//     }

//         formatCount(){
//         const {count} = this.state;
//         return count === 0 ? 'zero' : count;
//     }
//         getBadgeClass() {
//         let classes = "badge m-2 badge-";
//         classes += this.state.count === 0 ? "warning" : "primary";
//         return classes
//     }
// }
// export default Counter;