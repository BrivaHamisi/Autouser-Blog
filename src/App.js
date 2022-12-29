import './App.css';

function App() {

  const title = 'Welcome to the New Blog'
  const Likes = 50
  const link = 'https://www.google.com/'

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {Likes} times</p>

        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
