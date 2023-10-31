import { useEffect, useState } from "react";

const count = (props) => {
    const [count, setCount] = useState(props.count);
    const [value, setValue] = useState(1);
    const dec = () => {
        setCount(count - 1)
    }
    const inc = () => {
        setCount(count + 1)
  }
  
  useEffect(() => {
    console.log("In useEffect");
  }, [count])

    return (
        <>
        <p className="underline">This is a Counter</p>
        <div className="flex justify-center items-center py-2">
          <button onClick={dec} className="mx-4 bg-teal-300 text-black">
            -
          </button>
          <p>{count}</p>
          <button
            onClick={inc}
            className="inc mx-4 bg-teal-300 text-black"
          >
            +
          </button>
        </div>
      </>
    )
}

export default count;