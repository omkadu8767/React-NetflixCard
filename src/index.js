import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import Sdata from './Sdata';
import './index.css';
// console.log(Sdata[0].title);
// function ncard(val){}


ReactDOM.render(
  <>

  <center><h1 className='head' >List Of My Top Netflix Series</h1></center>
  {Sdata.map((val,index)=>{
    {/* console.log(index) */}
  return (
  <Card 
 imgsrc={val.imgsrc}
  title={val.title}
   sname={val.sname}
    link={val.link}
   />
  );
 

  })}  
 
 </>
,document.getElementById('root')
);



