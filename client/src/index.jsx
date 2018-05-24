import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Show from './components/show.jsx';
// import Dine from './components/dine.jsx';
import Search from './components/search.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            welcome: true,
            show: null,
            restaurant: null,
        }
        this.search = this.search.bind(this);
    }

    search(zipcode, date) {
        const contest = this;
        axios.post('/app', {
            zipcode: zipcode,
            date: date
        })
        .then((response) => {
            console.log(response.data);
            this.setState({
                welcome: false,
                show: response.data,
                // restaurant: response.data[1]
            })
        })  
        .catch((err) => {
            console.log('ERROR IN THE JSX SEARCH')
            console.error(err);
        })
    }


    render() {
        if (this.state.welcome === true) {
            return (
                <div>
                    <h1>Welcome to the landing page for NightLyve</h1>
                    <Search onSearch={this.search}/>
                </div>
            )
        } else {
            {console.log('this is the concert', this.state.show)}
            return ( 
            <div> 
                <Search onSearch={this.search}/>
                <div><Show concert={this.state.show}/></div>
{/*                <div><Dine restaurant={this.state.restaurant}/></div> */}
            </div>
            )
        }
    }

}


//componentDidMount()?
//if shows.length === 0 send {sorry, couldn't find any shows :( )}

ReactDOM.render(<App />, document.getElementById('app'));