import './App.css';
import Reservation from './components/templates/templates-reservation/Reservation';
import HeaderDetail from './components/templates/templates-header/HeaderDetail';
import HeaderList from './components/templates/templates-header/HeaderList';
import HeaderMain from './components/templates/templates-header/HeaderMain';
import MainPage from './components/pages/MainPage';
import Detail from './components/templates/templates-detail/Detail';
import ListPage from './components/pages/ListPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DetailPage from './components/pages/DetailPage';
import ReservationPage from './components/pages/ReservationPage';
import ProfileToggleModal from './components/UI/organisms/organisms-header/ProfileToggleModal';
import Main from './components/templates/templates-main/Main';
import LocationSearchInput from './components/UI/atoms/atoms-header/LocationSearchInput';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/reserve" component={ReservationPage} />
        <Route path="/detail/" component={DetailPage} />
        <Route path="/rooms" component={ListPage} />
        <Route path="/" exact component={MainPage} />
      </Switch>
    </BrowserRouter>
    // <LocationSearchInput />
  );
}

export default App;
