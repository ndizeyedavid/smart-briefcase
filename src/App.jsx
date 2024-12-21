import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from './routes/Home'
import Login from './routes/Login'
import HelpCenter from './routes/HelpCenter'
import Track from './routes/Track'
import History from './routes/History'
import Settings from './routes/Settings'
import ProfilePage from './routes/ProfilePage'
import Logout from './routes/Logout'

import ErrorPage from './routes/error'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/track" element={<Track />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/documentation" element={<HelpCenter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );

}



export default App
