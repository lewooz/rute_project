import styled from 'styled-components';
import HomePageMain from './views/pages/home_page/home_page_main';
import DrawerMenuMain from './views/sections/header_section/drawer_menu/drawer_menu_main';
import HeaderMain from './views/sections/header_section/header_main';
import {
  Switch,
  Route,
} from "react-router-dom";
import ApplicationFormPage from './views/pages/application_form/application_form_page';
import PaymentFab from './views/sections/payment_fab/payment_fab';
import CheckOutPageMain from './views/pages/checkout_page/checkout_page_main';
import useWindowSize from './hooks/use_window_size';
import MobileSocialLinksMenu from './views/sections/header_section/mobile_social_links_menu/mobile_social_links_menu';

const MainDiv = styled.div`
background-color: white;
min-height: 100vh;
position: relative;
overflow: hidden;
`

const App = () => {
  useWindowSize()

  return (
    <MainDiv>
      <HeaderMain />
      <DrawerMenuMain />
      <MobileSocialLinksMenu />
      <PaymentFab />
      <Switch>
        <Route exact path="/">
          <HomePageMain />
        </Route>
        <Route exact path="/application_form" component={ApplicationFormPage} />
        <Route exact path="/checkout" component={CheckOutPageMain} />
        <Route component={HomePageMain} />
      </Switch>
    </MainDiv>
  );
}

export default App;
