import './App.css';
import MainPage from './components/pages/MainPage';
import ListPage from './components/pages/ListPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DetailPage from './components/pages/DetailPage';
import ReservationPage from './components/pages/ReservationPage';
import AuthRedirect from './components/pages/AuthRedirect';
import PersonalInfoPage from './components/pages/PersonalInfoPage';
import ReserveConfirmPage from './components/pages/ReserveConfirmPage';
import ReservedDetailPage from './components/pages/ReservedDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/reservedDetail" component={ReservedDetailPage} />
        <Route path="/reserveconfirm" component={ReserveConfirmPage} />
        <Route path="/personInfo" component={PersonalInfoPage} />
        <Route path="/reserve" component={ReservationPage} />
        <Route path="/detail/:roomId" component={DetailPage} />
        <Route path="/rooms" component={ListPage} />
        <Route path="/redirect" exact component={AuthRedirect} />
        <Route path="/" exact component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
