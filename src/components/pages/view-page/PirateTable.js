import React from 'react';
import Pirate from './Pirate';
import { useSelector } from "react-redux";
const PirateTable = ({pirates, refreshPirates})=>{
    const user = useSelector(store=>store);
    return (
        <section id="pirate-list-main">
            
    <h1>{user.name}'s Pirate List</h1>
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