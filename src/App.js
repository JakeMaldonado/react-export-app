import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'antd/dist/antd.css';
import './index.css';

import Nav from './components/Nav';
import Exports from './components/Exports';

const sampleScrapes = [{
  profileImageSrc: 'https://instagram.fyto1-1.fna.fbcdn.net/vp/36550c8dd2bb64f01ef1bb165cb44d44/5DA2B872/t51.2885-19/s320x320/14730715_377298272613696_2715805218234171392_a.jpg?_nc_ht=instagram.fyto1-1.fna.fbcdn.net',
  profileName: 'Jake Maldonado',
  scrapeTitle: "Scrape of Jake's followers",
  followers: 297,
  toScrape: 115,
  index: 0,
  inProgress: true,
}]

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <div className="App">
          <Exports scrapes={sampleScrapes} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;

