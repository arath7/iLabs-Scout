import { createTheme, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
// import Overlay from './Components/Overlay';

import Cover from './pages/Cover.js';
import Final from './pages/Final.js';
import PreparationPage from './pages/PreparationPage.js';
import ExplorationPage from './pages/ExplorationPage.js';
import InitiationPage from './pages/InitiationPage.js';
import FinalizationPage from './pages/FinalizationPage.js';

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
    ].join(','),
  },
  palette: {
    mode: 'light',
    preparation: createColor('#4482CF'),
    exploration: createColor('#E27B68'),
    initiation: createColor('#4F9C82'),
    finalization: createColor('#B65965'),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Overlay /> */}
      <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/*" element={<MainLayoutRoutes />} />
      </Routes>
    </ThemeProvider>
  );
}

const MainLayoutRoutes = () => {

  return (
    <div>
      <Routes>
        <Route path="/preparation" element={<PreparationPage />} />
        <Route path="/exploration" element={<ExplorationPage />} />
        <Route path="/initiation" element={<InitiationPage />} />
        <Route path="/finalization" element={<FinalizationPage />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </div>
  );
}

export default App;
