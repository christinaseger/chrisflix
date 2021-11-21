import React, { useState } from 'react';
import Sidebar from './components/Sidebar/sidebar';
import List from './components/list/list';
import './app.css';
import series from './assets/series.json';

const Card = (props) => {
    return(
         <div>
          <img src = {props.url} />
        </div>
  );
  }

const App = () => {
   const [searchValue, setSearchValue] = useState('');
   console.log(searchValue);
  const seriesfiltradas = series.filter((serie)=> 
   {return  serie.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) });

   return (
    <div className="container">
      <Sidebar onSearch={setSearchValue} />
     

        <div className="images">
         {seriesfiltradas.map(serie => {
           return (
           <Card url= {serie.url}  />
           
           )
         })


         } 
    
   </div>
    </div>

  );
};

export default App;