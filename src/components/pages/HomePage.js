import React from 'react';

export default class HomePage extends React.Component {
   render() {
      return (
         <div id="showcase">
            <div className="my-container">
               <div id="showcase-content">
                  <h1>Intuitive Pirate Management</h1>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit cum voluptas in asperiores totam! Vero quae doloremque explicabo modi impedit.</p>
                  <button className="btn"><a href="pirate-list.html">View Pirates</a></button>
               </div>
            </div>
         </div>
      );
   }
}