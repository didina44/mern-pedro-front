import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'

import Public2 from './components2/Public2'
import FrenchLayout from './components2/FrenchLayout'

import Login from './features/auth/Login';
import DashLayout from './components/DashLayout'
import Welcome from './features/auth/Welcome'
import NotesList from './features/notes/NotesList'
import UsersList from './features/users/UsersList'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
        <Route index element={<Public />} />
      
 {/* Here Starts my insertion */}

      <Route path="/french" element={<FrenchLayout />}>
      <Route index element={<Public2 />} />

      




        


         {/* Here Ends my insertion */} 
        <Route path="login" element={<Login />} />

        <Route path="dash" element={<DashLayout />}>

          <Route index element={<Welcome />} />

          <Route path="notes">
            <Route index element={<NotesList />} />
          </Route>

          <Route path="users">
            <Route index element={<UsersList />} />
          </Route>

        </Route>{/* End Dash */}

      </Route>
    </Routes>
  );
}

export default App;

