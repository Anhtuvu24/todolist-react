import React from 'react';
import '../CSS/Footer.css';
function Footer(props) {
    const { displayList } = props;
    return (
        <>
            <div className='filterList'>
                <button onClick={() => displayList("All")}>All</button>
                <button onClick={() => displayList("Complete")}>complete</button>
                <button onClick={() => displayList("Active")}>Active</button>
            </div>

        </>
    )
};

export default Footer