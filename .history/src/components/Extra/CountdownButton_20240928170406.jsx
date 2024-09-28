import React, { useEffect, useState } from "react";

const CountdownTimer = ({setIsOpen}) => {
  const initialTime = 240; // 4 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer); // Clear the timer when it reaches 0
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes} min ${secs < 10 ? "0" : ""}${secs} sec left`;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.text}>
        Offer ends within {timeLeft > 0 ? formatTime(timeLeft) : "00:00 sec"}
     
     <img onClick={() =>window.location.href = '/CheckoutPage'} src="https://shoft.co.uk/wp-content/uploads/2015/07/buynow.gif" />
     
      </h1>
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    fontFamily: "Arial, sans-serif",
  },
  text: {
    fontSize: "40px",
    color: "#FF4500", // A vibrant color to attract attention
    animation: "pulse 1s infinite", // Pulsing animation to emphasize the text
    textAlign: "center",
  },
};

export default CountdownTimer;
