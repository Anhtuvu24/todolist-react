import React from 'react';
import '../CSS/Footer.css';
function Footer(props) {
    const { displayList, statusList } = props;
    return (
        <>
            <div className='filterList'>
                <button className={statusList === 'All' ? 'Selected' : ''} onClick={() => displayList("All")}>All</button>
                <button className={statusList === 'Complete' ? 'Selected' : ''} onClick={() => displayList("Complete")}>complete</button>
                <button className={statusList === 'Active' ? 'Selected' : ''} onClick={() => displayList("Active")}>Active</button>
            </div>

        </>
    )
};

export default Footer