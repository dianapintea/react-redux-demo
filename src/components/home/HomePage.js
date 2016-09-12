import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="central">
        <h1>check ya courses m8</h1>
        <p>ayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy <span>lmao</span></p>
        <br/>
        <Link to="about" className="button button-lg">read more</Link>
        {" "}
        <Link to="courses" className="button button-lg">czech 'em</Link>
      </div>
    );
  }
}

export default HomePage;
