import React from "react";

function TopLine() {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    span: {
      margin: "0 10px",
      width:
    },
  };

  return (
    <div style={styles.container}>
      <span style={styles.span}>1</span>
      <span style={styles.span}>2</span>
      <span style={styles.span}>3</span>
    </div>
  );
}

export default TopLine;
