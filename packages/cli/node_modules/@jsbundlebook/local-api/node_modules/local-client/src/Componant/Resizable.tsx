import React , { useEffect, useState } from "react";
import { ResizableBox , ResizableBoxProps} from "react-resizable";
import  "./Resizable.css"

interface ResizableProps{
direction : "Horzintal" | "Vertical"
}

const Resizable:React.FC <ResizableProps> = ({direction , children}) => {
  let resizableProps: ResizableBoxProps;

  const [innerWidth , setinnerWidth] = useState(window.innerWidth);
  const [innerHeight , setinnerHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth * 0.75);

 
  useEffect(() => {
    let timer: any;
    const listener = () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        setinnerWidth(window.innerHeight);
        setinnerHeight(window.innerWidth);
        if (window.innerWidth * 0.75 < width) {
          setWidth(window.innerWidth * 0.75);
        }
      }, 100);
    };
    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, [width]);

  if (direction === 'Horzintal') {
    resizableProps = {
      className: 'resize-horizontal',
      minConstraints: [innerWidth * 0.2, Infinity],
      maxConstraints: [innerWidth * 0.75, Infinity],
      height: Infinity,
      width: window.innerWidth * 0.75,
      resizeHandles: ['e'],
      onResizeStop: (event, data) => {
        setWidth(data.size.width);
      },
    };
  } else {
    resizableProps = {
      minConstraints: [Infinity, 24],
      maxConstraints: [Infinity, innerHeight * 0.9],
      height: 300,
      width: Infinity,
      resizeHandles: ['s'],
    };
  }
return <ResizableBox {...resizableProps}>{children}</ResizableBox>
}

export default Resizable;