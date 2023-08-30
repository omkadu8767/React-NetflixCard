import React from 'react';

function Card(props){
    return(
      <>
      
      <div className='cards'>
        <div className='card'>
          <img src={props.imgsrc} alt='stpic' className='card_img'/>
          <div className='card_info'>
            <center><span className='card_category'>{props.title}</span> </center>
            <center> <h3 className='card_title'> {props.sname} </h3></center>
            <a href={props.link} target='_blank'>
            <center><button>Watch Now</button></center>
            </a>
          </div>
        </div>
       </div>
       
    </>
    );
   }

   export default Card;
  