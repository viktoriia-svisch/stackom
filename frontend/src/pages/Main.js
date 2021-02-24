import React from 'react';
import './main.css';
import api from '../services/api';
import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';
export default function Main({ match }) {
  return (
    <div className="main-container">
      <img src={logo} alt="Tindev"/>
      <ul>
        <li>
          <img src="" alt="" />
          <footer>
            <strong></strong>
            <p></p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
