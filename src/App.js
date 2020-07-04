import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/signIn'>Sign In</Link>
            </li>
            <li>
              <Link to='/signUp'>Sign Up</Link>
            </li>
            <li>
              <Link to='/manage/links/create'>Create Link</Link>
            </li>
            <li>
              <Link to='/manage/links/edit'>Edit Link</Link>
            </li>
            <li>
              <Link to='/manage/links'>Links</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/signIn'>
            <h1>Sign In</h1>
          </Route>
          <Route path='/signUp'>
            <h1>Sign Up</h1>
          </Route>
          <Route path='/manage/links/create'>
            <h1>Create Link</h1>
          </Route>
          <Route path='/manage/links/edit'>
            <h1>Edit Link</h1>
          </Route>
          <Route path='/manage/links'>
            <h1>Links</h1>
          </Route>
          <Route path='/'>
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
