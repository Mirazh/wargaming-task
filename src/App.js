import React from 'react';
import { Search } from './components/Search';
import { List } from './components/List';
import { Post } from './components/Post';
import { Widget } from './components/Widget';

import './App.scss';

function App() {
  return (
    <div className="container">
	    <Search/>
	    <List/>
	    <Post/>
	    <Widget/>
    </div>
  );
}

export default App;
