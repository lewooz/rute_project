import styled from 'styled-components';
import HomePageMain from './views/pages/home_page/home_page_main';
import DrawerMenuMain from './views/sections/header_section/drawer_menu/drawer_menu_main';
import HeaderMain from './views/sections/header_section/header_main';
import {
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import React from 'react';
import ApplicationFormMain from './views/pages/application_form/application_form_main';

const MainDiv = styled.div`
background-color: white;
min-height: 100vh;
position: relative;
overflow: hidden;
`

const App = () => {
  return (
    <MainDiv>
      <HeaderMain />
      <DrawerMenuMain />
      <Switch>
        <Route exact path="/">
          <HomePageMain />
        </Route>
        <Route path="/application_form">
          <ApplicationFormMain />
        </Route>
        <Route component={HomePageMain} />
      </Switch>

    </MainDiv>
  );
}

export default App;
