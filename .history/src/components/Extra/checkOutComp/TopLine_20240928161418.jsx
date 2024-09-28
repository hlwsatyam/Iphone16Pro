import React from "react";

function TopLine() {
  const styles = {
    container: {
      display: "flex",
      marginTop: "100px",
      justifyContent: "space-between",
      alignItems: "center",
    },
    span: {
      width: "20px",
      height: "20px",
      backgroundColor: "gray",
      backgroundColor: "green",
      color: "white",
      borderRadius: "50%",
      display: "flex",
      fontSize: "24px",
      fontWeight: 700,
      padding: "20px", // Adjust padding to balance size
      justifyContent: "center",
      alignItems: "center",
    },

    line: {
      width: "100%",
      height: "4px",
      backgroundColor: "green",
    },
    line2: {
      width: "100%",
      height: "4px",
      backgroundColor: "greay",
    },
  };

  return (
    <div style={styles.container}>
      <span style={styles.span}>1</span>
      <div style={styles.line}></div> {/* Central line between spans */}
      <span style={styles.span}>2</span>
      <div style={{...styles.line, ...styles.line2}}></div>{" "}
      {/* Central line between spans */}
      <span style={styles.span}>3</span>
    </div>
  );
}

export default TopLine;
