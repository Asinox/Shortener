import React, { Component } from 'react';
import Header from "./Header";
import FormInput from "./FormInput";
import { Link } from "react-router-dom";

const Home = () => {

    return(
        <div className='container'>  
            <Header headerText="Shortener"/>
            <div className='row'>
                <div className='col'>
                    <div className='row'>
                        <div className='col pb-2'>
                            <Link className='font-weight-bold' to='/h/top'>Check our top 100 accessed URLs</Link>
                        </div>
                    </div> 
                    <FormInput placeHolder='Paste a link to shorten it.' />
                </div>      
            </div>  
              
        </div>
    );
}

export default Home;