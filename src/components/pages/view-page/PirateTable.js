import React from 'react';
import Pirate from './Pirate'
const PirateTable = ({pirates, refreshPirates})=>{
    return (
        <section id="pirate-list-main">
        <h1>Pirate List</h1>
        <button onClick={refreshPirates}>Refresh</button>
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th>Pirate ID</th>
                    <th>Pirate Name</th>
                    <th>Role ID</th>
                    <th>Role Name</th>
                </tr>
            </thead>
            <tbody id="pirate-table-data">
                {
                    pirates.map(pirate=> 
                        (<Pirate pirate={pirate} key={pirate.id}/>)
                    )
                }
            </tbody>
        </table>
        </section>
    );
}

export default PirateTable;