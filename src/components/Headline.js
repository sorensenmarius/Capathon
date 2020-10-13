import React from 'react';

const Headline = () => (
  <div>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
      alt="Pokemon"
      style={{ width: '350px', alignItem: 'center' }}
    ></img>{' '}
    <h1
      style={{
        display: 'inline',
        fontSize: '100px',
        color: '#3D7DCA',
        textShadow: '2px 2PX #003A70',
      }}
    >
      - 4cash
    </h1>
    {/*<p>
      Kjøp pokemons du vil ha, som er fit for fight. Pokemon4cash tilbyr søte,
      kamplare og dødelige kjæledyr til alle og enhver! Hjelp pokemon4cash å
      gjøre butikken klar!
    </p>*/}
  </div>
);

export default Headline;
