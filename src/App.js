import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'antd/dist/antd.css';
import './index.css';

import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import Results from './components/Results';

const sampleScrapes = [{
  profileImageSrc: 'https://instagram.fyto1-1.fna.fbcdn.net/vp/36550c8dd2bb64f01ef1bb165cb44d44/5DA2B872/t51.2885-19/s320x320/14730715_377298272613696_2715805218234171392_a.jpg?_nc_ht=instagram.fyto1-1.fna.fbcdn.net',
  profileName: 'Jake Maldonado',
  scrapeTitle: "Scrape of Jake's followers",
  followers: 297,
  toScrape: 115,
  index: 0,
  inProgress: true,
}];

const rawResults = [
  {
    "profileUrl": "https://www.instagram.com/jonny_vango",
    "username": "jonny_vango",
    "fullName": "Jonny van Essen",
    "imgUrl": "https://scontent-sjc3-1.cdninstagram.com/vp/47d603027d681103a725244e49033ea4/5DB3C91A/t51.2885-19/11015689_1500815326807736_1060982283_a.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com",
    "id": "33808351",
    "isPrivate": null,
    "isVerified": null,
    "followedByViewer": "Followed By Viewer",
    "query": "https://www.instagram.com/jakemaldo",
    "timestamp": "2019-07-03T00:57:35.775Z"
  },
  {
    "profileUrl": "https://www.instagram.com/steve.hak",
    "username": "steve.hak",
    "fullName": "Steve Hak",
    "imgUrl": "https://scontent-sjc3-1.cdninstagram.com/vp/65c0cc174745a7f97323a610ca7f5263/5DB77AFC/t51.2885-19/s150x150/60406311_2217975378292377_8701481592826101760_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com",
    "id": "346967553",
    "isPrivate": null,
    "isVerified": null,
    "followedByViewer": "Followed By Viewer",
    "query": "https://www.instagram.com/jakemaldo",
    "timestamp": "2019-07-03T00:57:35.110Z"
  }
];

const sampleResults = rawResults.map(result => {
  const tags = [];
  tags.push(result.isPrivate ? "private" : "public");
  result.isVerified && tags.push("verified");
  result.tags = tags;
  return result;
});

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' render={() => <Dashboard sampleScrapes={sampleScrapes} />}/>
        <Route exact path='/results' render={() => <Results searchResults={sampleResults} />}/>
      </Switch>
    </Router>
  );
}

export default App;

