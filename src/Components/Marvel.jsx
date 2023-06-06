import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const Marvel = () => {
  const { id } = useParams();
  const [item, setItem] = useState();
  const fetch = async () => {
    const res = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=35b5a1b279da9f167d0d99b59b192a42&hash=286b8c09e0923faf4cb4da93d3abdbea`
    );
    setItem(res.data.data.results[0]);
  };
  fetch();

  return (
    <>
      {!item ? (
        ''
      ) : (
        <div className="box-content">
          <div className="right-box">
            <img
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              alt=""
            />
          </div>
          <div className="left-box">
            <h1>{item.name}</h1>
            <h4>{item.description}</h4>
          </div>
        </div>
      )}
    </>
  );
};

export default Marvel;
