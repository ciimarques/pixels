import Dashboard from './Components/Dashboard/index';
import Header from './Components/Header/index';
import Palette from './Components/Palette/index';

function App() {
  return (
    <div
    className="bg-imagemfundo min-h-screen bg-cover bg-center"
    >
      <Header />
      <Palette />
      <Dashboard />
    </div>
  );
}

export default App;
