import 'app/styles/index.scss';
import { AppRouter } from './router';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from 'widgets';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
