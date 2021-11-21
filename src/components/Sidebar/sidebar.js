import React from 'react';
import logo from '../../assets/logo.svg';
import styles from './sidebar.module.css'

const Sidebar = ({ onSearch }) => {
  const handleChange = event => {
const value = event.target.value;
  onSearch(value);
}
 
  return (
    <div className={styles.container}>
      {/* <img src={logo} width={350} /> */}

      <div className={styles.searchbar}>
        <input onChange={handleChange} placeholder="Search" />
      </div>

    </div>




  );
};

export default Sidebar;
