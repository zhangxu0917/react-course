import { useEffect, useState } from "react";

const Timer = () => {
  const [currentTime, setCurrentTime] = useState();

  const getTime = () => {
    return new Date().toLocaleString("zh-CN");
  };

  useEffect(() => {
    let t = setInterval(() => {
      setCurrentTime(getTime());
    }, 1000);

    return () => {
      clearInterval(t);
      t = null;
    };
  }, []);

  return (
    <>
      <div>Current Time</div>
      <h3>{currentTime}</h3>
    </>
  );
};

export default Timer;
