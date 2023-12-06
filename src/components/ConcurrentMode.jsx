import React from "react";
import { useTransition } from "react";
import { useState } from "react";
import Card from "./Card";

//usetransition in react 18 using concurrent rerender
// do remember for enabling concurrent rerender we need to follow new render method of createRoot() fn then render that
//in index.js file

const ConcurrentMode = () => {
  const [text, setText] = useState();
  const [query, setQuery] = useState();
  const [isPending, startTransition] = useTransition(); //React 18 new hook

  const changeText = (e) => {
    //The useTransition hook is a new API that allows the
    //users to mark any less-urgent actions as transitions and then tell React to let other,
    //more urgent actions take priority in the rendering timeline.
    //basically we can say one task gets paused in order to complete the other more urgent task
    startTransition(() => {
      setQuery(e.target.value);
    });

    setText(e.target.value);
  };

  return (
    <div>
      <input value={text} onChange={changeText} />
      {isPending && <p>Loading...</p>}

      <Card searchQuery={query} />
    </div>
  );
};

export default ConcurrentMode;
