// Defination : useState is fundamental hooks in react which allow us to manage the state within the functional components
import React from "react";
//first import the useState before using it inside functional component.
import { useState } from "react";
const UseState = () => {
  //you can use any name as functoinal component i am taking UseState for better better understanding
  // now here i am going to use useState hooks to make simple counter so, its syntax is:
  const [count, setCount] = useState(0);
  //  here useState takes two parameter value in array 1st inital value & next will update the state i.e, we have took
  // 'count' as initial value and next is 'setCount' which will change our inital state count value, after every time
  // whenever setCount will update.
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div className="">
        <h1 className="text-4xl font-semibold underline mb-5">
          UseState- Counter
        </h1>
        <h1 className="mb-10 font-semibold text-6xl"> {count} </h1>
        <button
          onClick={increase}
          class="mx-2 relative overflow-hidden rounded-lg h-12 group hover:animate-pulse hover:shadow-lg hover:scale-105 transition duration-500 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-pink-400 before:via-purple-400 before:to-indigo-400"
        >
          <span class="text-lg relative text-white font-bold px-8 py-8">
            Increase
          </span>
        </button>
        <button
          onClick={decrease}
          class="relative overflow-hidden rounded-lg h-12 group hover:animate-pulse hover:shadow-lg hover:scale-105 transition duration-500 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-pink-400 before:via-purple-400 before:to-indigo-400"
        >
          <span class="relative text-white font-bold text-lg px-8 py-8">
            Decrease
          </span>
        </button>
      </div>
    </>
  );
};

export default UseState;
/*
Intertview Questions on useState:-
1) Can you explain the difference between using useState and traditional class-based state management in React?
2) How does React ensure that state updates with useState are applied correctly and consistently in functional components?
3) Can you explain the significance of the initial state parameter in the useState hook?
*/
