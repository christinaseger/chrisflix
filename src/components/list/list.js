import React, { useEffect, useState } from 'react';
import Card from './card/card';
import data from '../../assets/response.json';
import styles from './list.module.css';
import Modal from '../modal/modal';

const List = ({ searchValue }) => {
  const [selectedItem, setSelectedItem] = useState();
  const [filteredData, setFilteredData] = useState(data);
  useEffect(() => {
    if (searchValue !== '') {
      setFilteredData(data.filter(({ title }) => {
        const regex = new RegExp(searchValue, 'g');
        return regex.test(title);
      }))
    }
  }, [searchValue, setFilteredData]);

  return (
    <div className={styles.container}>
      {filteredData.map(item => <Card item={item} onClick={() => {
        setSelectedItem(item);
      }} />)}
      {selectedItem && <Modal onClose={() => setSelectedItem(null)}>
        <p><b>Title:</b> {selectedItem.title}</p>
        <p><b>Url:</b> {selectedItem.url}</p>
        <img src={selectedItem.thumbnailUrl} width="400" />
      </Modal>}
    </div>
  );
};

export default List;