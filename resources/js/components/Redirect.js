import React, { Component } from 'react';

class Redirect extends Component{

    constructor(props){
        super(props);
        state:{
            short: null
        }
    }

    componentWillMount(){
        const short = this.props.match.params.id
        fetch(`/api/${ short }`)
            .then((results) => {          
                return results.json();
        }).then((data) => {
            this.setState({
                short: data
            });
        });
    }

    render(){
        return(
            <p>Redirecting</p>
        )
    }

}

export default Redirect;