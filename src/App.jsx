import React from 'react';
import Card from './Cards';
import Sdata from './Sdata';


const App= () => (
  <>

  <center><h1 className='head' >List Of My Top Netflix Series</h1></center>
  {Sdata.map((val,index)=>{
    {/* console.log(index) */}
  return (
  <Card 
   key={val.id}
 imgsrc={val.imgsrc}
  title={val.title}
   sname={val.sname}
    link={val.link}
   />
  );
 })}  
  </>
);

export default App;


