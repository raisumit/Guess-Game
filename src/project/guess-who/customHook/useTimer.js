import { useEffect, useState, useRef, useContext } from "react";

export default function useTimer(initialVal) {
 const [trackerState, settrackerState] = useState(initialVal);
 let timer = useRef(null);

 function handleTimerstate(prev, state) {

  if (prev.questioncount == state.questioncount && prev.time <= 0 && prev.life == 1) {
   clearInterval(timer.current);
   return {life:prev.life-1,questioncount:prev.questioncount+1,time:0}
  } else if (prev.questioncount == state.questioncount && prev.time <= 0 && prev.life > 0) {
   clearInterval(timer.current);
   return { life: prev.life - 1, questioncount: prev.questioncount + 1, time: 10 }
  }
  if (prev.time <= 0) {
   clearInterval(timer.current);
   return { ...prev };
  } else {
   return { ...prev, "time": prev.time - 1 };
  }
 }

 useEffect(() => {
  handleTimer();
 }, [trackerState.questioncount]);

 function handleTimer() {
  clearInterval(timer.current);
  timer.current = setInterval((e) => {
   settrackerState((prev) => {
    return handleTimerstate(prev, trackerState);
   });

  }, 1000);
 }
 return [trackerState, settrackerState];
}