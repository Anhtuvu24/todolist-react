import React from 'react';

function paginationSub(WrappedComponent) {
    return class extends React.Component {
        constructor() {
            super()
            this.state = {
                limitTodo: 3,
                isLoading: false,       
            }
        }
        onScroll = () => {
            this.setState({
                isLoading: true,
            })
            setTimeout(() => {
                this.setState((state) => ({
                    isLoading: false,
                    limitTodo: state.limitTodo + 2,
                }))
            }, 2000)
        }
        render() {
            const { isLoading, limitTodo } = this.state;
            return (
                <WrappedComponent 
                    isLoading={isLoading} 
                    limitTodo={limitTodo} 
                    onScroll={this.onScroll} 
                    {...this.props} 
                />
            )
        }
    }
}

export default paginationSub;