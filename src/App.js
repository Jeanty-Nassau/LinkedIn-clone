import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar'
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user is loggin in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }));
      } else {
        //user is loggin out
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="app">
      {/* Header */}
      <Header />
      {!user ? (<Login />) : (
        /* App Body */
        < div className='app-body'>
          {/* Sidebar */}
          <Sidebar />
          {/* Feed */}
          <Feed />
          {/* Widgets */}
          <Widgets />
        </div>
      )
      }



    </div>
  );
}

export default App;
