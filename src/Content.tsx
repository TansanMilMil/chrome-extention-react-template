import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Content.css';

const Content = () => {
  return (
    <div>
      <div className={styles.foo}>foo</div>
    </div>
  );
};

window.addEventListener('load', () => {
  const el = document.createElement('div');
  el.id = 'chrome-extention-body';
  document.getElementsByTagName('body')[0].appendChild(el);
  ReactDOM.render(<Content />, el);
});