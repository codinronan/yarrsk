import React from 'react';

function App(props = {}) {
  const { children } = props;

  return (
    <div style={{ padding: 30 }}>
      {children}
    </div>
  );
}

export default App;
