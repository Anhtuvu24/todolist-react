import React from 'react';
import '../CSS/Footer.css'
class Footer extends React.Component {

    render() {
        const { displayList } = this.props;
        return (
            <>
                <div className='filterList'>
                    <button onClick={() => displayList("All")}>All</button>
                    <button onClick={() => displayList("Complete")}>complete</button>
                    <button onClick={() => displayList("Active")}>Active</button>
                </div>

            </>
        )
    }
}

export default Footer