import React, { useRef, useState } from 'react';

// function paginationSub(WrappedComponent) {
//     return class extends React.Component {
//         constructor() {
//             super()
//             this.state = {
//                 limitTodo: 3,
//                 isLoading: false,
//             }
//         }
//         onScroll = () => {
//             this.setState({
//                 isLoading: true,
//             })
//             setTimeout(() => {
//                 this.setState((state) => ({
//                     isLoading: false,
//                     limitTodo: state.limitTodo + 2,
//                 }))
//             }, 2000)
//         }
//         render() {
//             const { isLoading, limitTodo } = this.state;
//             return (
//                 <WrappedComponent
//                     isLoading={isLoading}
//                     limitTodo={limitTodo}
//                     onScroll={this.onScroll}
//                     {...this.props}
//                 />
//             )
//         }
//     }
// };


function usePaginationSub(scrollRef, list) {
    const [limitTodo, setLimitTodo] = useState(3);
    const [isLoading, setIsLoading] = useState(false);

    const scrollBottomDom = (dom) => {
        debugger;
        return (dom.scrollHeight - dom.clientHeight) - dom.scrollTop;
    };

    const onScrollBot = () => {
        const bot = scrollBottomDom(scrollRef);
        debugger;
        if (bot < 3 && (limitTodo < list.length)) {
            onScroll();
            debugger;
        }
    };

    const onScroll = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setLimitTodo(limitTodo + 2);
        }, 2000);
        console.log(limitTodo);
    }
    return [limitTodo, isLoading, onScrollBot];
}   

export default usePaginationSub;