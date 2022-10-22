import { useState } from "react";

function usePaginationSub(list) {
  const [limitTodo, setLimitTodo] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  const scrollBottomDom = (dom) => {
    return dom.scrollHeight - dom.clientHeight - dom.scrollTop;
  };

  const onScrollBot = (scrollRef) => {
    const bot = scrollBottomDom(scrollRef);
    if (bot < 3 && limitTodo < list.size) {
      onScroll();
    }
  };

  const onScroll = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setLimitTodo(limitTodo + 5);
    }, 2000);
  };
  return [limitTodo, isLoading, onScrollBot];
}

export default usePaginationSub;