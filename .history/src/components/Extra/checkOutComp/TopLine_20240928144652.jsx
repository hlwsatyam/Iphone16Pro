import React from 'react';

function TopLine() {
  const styles = {
    container: {
      display: 'flex',
      
    },
    span: {
      margin: '0 10px',
    },
  };

  return (
    <div >
      <span style={styles.span}>1</span>
      <span style={styles.span}>2</span>
      <span style={styles.span}>3</span>
    </div>
  );
}

export default TopLine;
