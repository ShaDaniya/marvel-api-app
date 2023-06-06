import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Main = () => {
  const [url, setUrl] = useState(
    'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=35b5a1b279da9f167d0d99b59b192a42&hash=286b8c09e0923faf4cb4da93d3abdbea'
  );
  const [item, setItem] = useState();

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(url);
      setItem(res.data.data.results);
      console.log(res.data.data.results);
    };
    fetch();
  }, [url]);

  return (
    <>
      <div className="header">
        <div className="bg">
          <img src={require('../Images/bg.jpeg')} alt="" />
        </div>
        <div className="search-bar">
          <img src={require('../Images/logo.jpg')} alt="logo" />
          <input type="search" placeholder="Search Here" className="search" />
        </div>
      </div>
      <div className="content">
        {!item ? <p>Not Found</p> : <Card data={item} />}
      </div>
    </>
  );
};

export default Main;
