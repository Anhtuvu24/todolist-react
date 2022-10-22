import React, {useContext} from 'react';
import { Theme } from "./theme";
import '../CSS/Footer.css';
function Footer(props) {
    const { displayList, statusList } = props;
    const theme = useContext(Theme);

    return (
        <>
            <div className='filterList'
            style={{
                backgroundColor: theme.theme.backgroundColor,
                color: theme.theme.color,
              }}>
                <button className={statusList === 'All' ? 'Selected' : ''} onClick={() => displayList("All")}>All</button>
                <button className={statusList === 'Complete' ? 'Selected' : ''} onClick={() => displayList("Complete")}>Complete</button>
                <button className={statusList === 'Active' ? 'Selected' : ''} onClick={() => displayList("Active")}>Active</button>
            </div>

        </>
    )
};

export default Footer