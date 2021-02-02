import './App.css';
import Reservation from './components/templates/templates-reservation/Reservation';
import HeaderDetail from './components/templates/templates-header/HeaderDetail';
import HeaderList from './components/templates/templates-header/HeaderList';
import HeaderMain from './components/templates/templates-header/HeaderMain';
import MainPage from './components/pages/pages-main/MainPage';

function App() {
  return (
    <>
      <HeaderMain />
      {/* <HeaderDetail /> */}
      {/* <HeaderList /> */}
      {/* <Reservation /> */}
      <MainPage />
    </>
  );
}

export default App;
