import React, { Component } from 'react';
import Result from "./Result";
import Loader from 'react-loader-spinner';

class FormInput extends Component {

    constructor(props){
        super(props);

        this.state = { 
            longUrl: '',
            emptyField: false,
            short:[],
            loading: false,
            id: '',
            error: false
        };

        this.getLongUrl = this.getLongUrl.bind(this);                    

    }

    shortUrl(){   
        this.setState({loading: true, short:[], error: false});

        if(this.state.longUrl){

            const longUrl  = this.state.longUrl;

            fetch(`/api/shorts/process/?url=${ longUrl }`)
            .then((results) => {
                console.log(results);                                   
                if(results.ok) {                                   
                    return results.json();
                }                
                //this.setState({error: true});
                
            }).then((data) => {
                this.setState({
                    short: data,
                    loading: false,       
                    //error: false             
                });
                //console.log(this.state.error);
                this.refs.inputText.value = '';

            }).catch(function(error){
                console.log('There is something wrong with your link: Not Found',);
            });
        }else{
            this.setState({
                emptyField: true,
                //error: true
            });
        }
        
    }

    getLongUrl({ target }){
        this.setState({ longUrl : target.value , emptyField: false, loading:false});
    }

    render(){
 
        const emptyField = this.state.emptyField;
        const error404 = this.state.error;        

        return(
            <div className="row justify-content-md-center">  
                <div className='col'>
                    <div className='row'>
                        <div className="col pr-0">          
                            <input ref="inputText" type ='text' autoComplete="off" name="url" className="form-control" placeholder={this.props.placeHolder} value={this.state.longUrl} onChange={this.getLongUrl.bind(this)} onKeyPress={()=>{}}/>
                            {emptyField || error404 ? <div className="invalid-tooltip" style={displayError}>Please enter a valid link!</div> : null}
                        </div>
                        <div className="col-auto pl-0">
                            <button type="button" onClick={ this.shortUrl.bind(this) } className="btn btn-primary mb-2">SHORTEN</button>
                        </div>
                    </div>
                    { 
                        this.state.short && Object.keys(this.state.short).length ? 
                        <Result>
                            <div className="alert alert-success" role="alert">
                                <h5>{this.state.short.page_title}</h5>
                                <p><a className='long' href={`${this.state.short.url}`} target='_blank'>{this.state.short.url}</a></p>
                                <hr />
                                <h4 className="alert-heading">Your short URL</h4>
                                <p className="mb-0"><a className='short' href={this.state.short.scheme+"/"+this.state.short.short_url} target='_blank'>{this.state.short.scheme+"/"+this.state.short.short_url}</a></p>
                            </div>
                        </Result> : null    
                    }

                    { this.state.loading && !this.state.emptyField  ? 
                        <Loader 
                            type="Puff"
                            color="#00BFFF"
                            height="50"	
                            width="50"
                        /> : null 
                    }
                </div>
            </div>
        );  
    }
}

var displayError = {
    display: 'block'
};

export default FormInput;