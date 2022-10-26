import React from 'react';
import Review from './Review';
function App() {
  return (
    <main className='main'>
      <div className="container">
        <div className="title">
          <h2>our reviews</h2>
          <p className="underline"></p>
          <Review />
        </div>
      </div>
    </main>
  );
}

export default App;
