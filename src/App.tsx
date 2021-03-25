import styled from 'styled-components';
import HomePageMain from './views/pages/home_page/home_page_main';
import DrawerMenuMain from './views/sections/header_section/drawer_menu/drawer_menu_main';
import HeaderMain from './views/sections/header_section/header_main';


const MainDiv = styled.div`
background-color: white;
min-height: 100vh;
position: relative;
overflow-y: hidden;
`

const App = () => {
  return (
    <MainDiv>
      <HeaderMain />
      <DrawerMenuMain />
      <HomePageMain />
    </MainDiv>
  );
}

export default App;
