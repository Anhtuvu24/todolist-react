import React from 'react';
import '../CSS/Footer.css'



class Footer extends React.Component {

    displayAll = () => {
        this.props.displayList("All");
    };

    displayComplete = () => {
        this.props.displayList("Complete");
    };

    displayActive = () => {
        this.props.displayList("Active");
    };

    render() {
        return(
            <div>
                <div className='filterList'>
                    <button onClick = {this.displayAll}>All</button>
                    <button onClick = {this.displayComplete}>complete</button>
                    <button onClick = {this.displayActive}>Active</button>
                </div>
                
            </div>
        )
    }
}

export default Footer
