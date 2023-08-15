import React from 'react';

const PlantList = () => {
  return (
    <div className="flex flex-row flex-wrap justify-left items-start px-2 sm:px-0">
      <div className="plant-card">
        <a className="cursor-pointer" href="https://greg.app/plant-care/golden-pothos">
          <img
            src="https://media.greg.app/cGxhbnQtZGItcGhvdG9zL2dvbGRlbl9wb3Rob3MuanBn?format=pjpeg&amp;optimize=medium&amp;auto=webp&amp;precrop=600:600,smart&amp;fit=cover&amp;width=600&amp;height=600"
            width="200px"
            height="200px"
            className="rounded-2xl"
            loading="lazy"
            alt="Golden Pothos"
          />
          <h3 className="text-sm font-medium pt-2 pb-1 hover-underline">Golden Pothos</h3>
          <p className="text-xs flex flex-row items-center justify-center">
            <img className="heart-icon" src="/static/web/img/heart_5.png" alt="Heart Icon" />
            <span className="font-bold ml-1.5 mr-1">4.8</span> (2581)
          </p>
        </a>
      </div>



    </div>
  );
};

export default PlantList;