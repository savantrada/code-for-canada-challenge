import React from 'react';
import { dataset } from './dataset';

export default class ViolationTableData extends React.Component { 
    render(){
        return (      
            <div className="table-container">
                <h1 className="subtitle tag is-black is-large">Full Violation Table</h1>
                <table className="table is-bordered is-hoverable">
                    <thead>
                       <tr> 
                            <th>Violation Id</th>
                            <th>Inspection ID</th>
                            <th>Violation Category</th>
                            <th>Violation Date</th>
                            <th>Violation Date Closed</th>
                            <th>Violation Type</th>
                        </tr>
                    </thead>
                    <tbody>{       
                        dataset.map( (dataset, index) => {
                            return (
                            <tr key={index} align="start">
                                <td>{dataset.violation_id}</td>
                                <td>{dataset.inspection_id}</td>
                                <td>{dataset.violation_category}</td>
                                <td>{dataset.violation_date}</td>
                                <td>{dataset.violation_date_closed}</td>
                                <td>{dataset.violation_type}</td>
                            </tr>                     
                        )})
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}