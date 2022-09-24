import './App.css';
//Routes
import { MainRoutes } from "./routes/mainRoutes";
/*
APIs:
http://jsonplaceholder.typicode.com/albums
http://jsonplaceholder.typicode.com/albums/1
http://jsonplaceholder.typicode.com/albums/1/photos
http://jsonplaceholder.typicode.com/photos/1
*/
function App() { 
  return (
    <div>
      <header className="App-header">
        <h1>Galeria de fotos</h1>
      </header>
      <hr />
      <div>
        <MainRoutes></MainRoutes>
      </div>
      <hr />
      <footer className="App-footer">
        todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;
