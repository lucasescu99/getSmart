import React from 'react'
import { Link } from 'react-router-dom';


export default () => (
  <div>
    <Link to="/user/login"> <button> LOGIN </button></Link>
    <Link to="/user/register"><button> REGISTER </button></Link>
  </div>)

