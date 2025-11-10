import './Cloths.css';
import one from '../../assets/Images/md1.jpeg';
import two from '../../assets/Images/md2.jpeg';
import React from 'react';

const clothContent = [
  { picture: one, description: "BUBU" },
  { picture: two, description: "JOGGERS" },
  { picture: one, description: "BUBU" },
  { picture: two, description: "JOGGERS" }
];

function Cloths() {
  return (
    <div className="conta">
      <div className="gridconta">
        {clothContent.map((item, i) => (
          <figure className="clothdiscription" key={i}>
            <img src={item.picture} alt={item.description} />
            <p>{item.description}</p>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default Cloths;
