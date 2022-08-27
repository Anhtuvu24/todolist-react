import React from 'react';

class Page extends React.Component {

    numberPage = () => {
        const { longList } = this.props; 
        const arr =[];
        for(let i = 1; i <= longList; i++) {
            arr.push(i);
        }
        return arr;
    }

    setPage = (e) => {
        this.props.getPage(e.target.value);
    }
    
    render() {
        const a = this.numberPage();
        return (
            <div>
                {a.map((item) => 
                    <button value={item} className='pageButton' onClick={this.setPage}>{item}</button>
                )} 
            </div>
        )
    }
}

export default Page;