import React, { Component } from 'react';
import Header from './Header';
import Loader from 'react-loader-spinner';

class TopShort extends Component{

    constructor(props){
        super(props);

        this.state = {
            shorts: [],
            loading: false
        };
    }

    componentWillMount(){

        this.setState({loading: true});

        fetch(`/api/top`).then(response => response.json())
            .then(data => {
            let shorts = data.map((short, index) => {
                return(
                    <li key={index}><a target="_blank" href={short.scheme+"/"+short.short_url}>{short.page_title}</a></li>
                )
            })
            this.setState({
                shorts: shorts,
                loading: false
            });
        });
    }

    render() {
        return(
            <div className='container'>  
                <Header headerText="Shortener"/>
                <div className='row'>
                    <div className='col'><h4>Top 100 links</h4></div>
                    <div className='col-auto'><a className='back' href="/" role="button">Generate Short links</a></div>
                </div>

                <div className='row'>
                    <div className='col'>
                        { this.state.loading   ? 
                            <Loader 
                                type="Puff"
                                color="#00BFFF"
                                height="50"	
                                width="50"
                            /> : this.state.shorts 
                        }
                    </div>      
                </div>  
                
            </div>
        );
    }

}

export default TopShort;