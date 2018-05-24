import React from 'react';
import { DatePicker } from 'antd';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zip: '',
            date: ''
        }
        this.search = this.search.bind(this);
        this.onZipChange = this.onZipChange.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onZipChange(e) {
        e.preventDefault();
        this.setState({
            zip: e.target.value
        })
    }   
    
    onDateChange(e) {
        e.preventDefault();
        this.setState({
            date: e.target.value
        })
    }

    
    onChange(date, dateString) {
        console.log(date, dateString);
        this.setState({
            date: dateString
        })
      }

    search(e) {
        e.preventDefault();
        this.props.onSearch(this.state.zip, this.state.date);
    }

    render() {
        return (
          <div> 
            <div>
            Pick Your Night{' '}
            <DatePicker size="large" onChange={this.onChange} />
            </div>
            <div>
      </div>
            <div>
            What's Your Zip? {' '}
            <input value={this.state.zip} onChange={this.onZipChange}/>
            <button onClick={this.search}>Let's Boogie</button>
            </div>
          </div>
        )
    }
}

export default Search;