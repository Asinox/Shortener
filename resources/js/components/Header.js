import React from 'react';

const Header = (props) => {
        
        return(            
            <div className="row">
                <div className="col">
                    <strong className="logo">{props.headerText}</strong>
                </div>
            </div>
        );

}

export default Header;