import { useEffect, useState } from "react";

export const useDebounce =<T>(value:T, delay:number)=> {
    // 定义一个状态来存储防抖后的值
    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(() => {
      // 创建一个定时器
      const timer = setTimeout(() => {
        // 在延迟后更新 debouncedValue
        setDebouncedValue(value);
      }, delay);
  
      // 每次在上一个 useEffect 处理完后再运行
      // 如果 value 变化，就清除定时器
      return () => {
        clearTimeout(timer);
      };
    }, [value, delay]); // 仅在 value 或 delay 改变时重新运行
  
    return debouncedValue;
  }