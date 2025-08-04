
import React, { useState, useEffect } from "react";

  // AnimatedText Component
  function useAnimatedText(text){
    const [display, setDisplay] = useState("");
    useEffect(() => {
        setDisplay("")
        let i = 0;
        const interval = setInterval(() => {
            setDisplay(text.slice(0, i + 1));
            i++;
            if(i >= text.length) clearInterval(interval)
            }, 60)
            return () => clearInterval(interval)
        }, [text])
        return display
    }

    const AnimatedText = ({text}) => {
        const animatedText = useAnimatedText(text)
        return <h1 className="text-3xl font-extrabold text-[#03045e] sm:text-5xl md:text-6xl">{animatedText}</h1>
    }
  
 export default AnimatedText