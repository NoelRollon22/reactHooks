import React, { useState }from 'react';


function App() {
  const [favorite, setFavorite] = useState ("singing");
  return (
    <div className='App'>
      <h1>My Favorite thing to do is {favorite}!</h1>
      <button onClick={()=>setFavorite("reading")}>Reading</button>
      <button onClick={()=>setFavorite("singing")}>Singing</button>
      <button onClick={()=>setFavorite("dancing")}>Dancing</button>
      <button onClick={()=>setFavorite("watching movies")}>Watching Movies</button>
      
    </div>
  );
}
export default App;

