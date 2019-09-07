import React from 'react';
import {dataset} from './dataset';

const CalculateViolations = () => {
    var dates = [], updatedResult= [] ;

    let result = [...dataset.reduce( (map, obj) => {
        const key = JSON.stringify([obj.violation_category]);
        if (!map.has(key)) 
            map.set(key, { ...obj,  count: 0 });
        map.get(key).count++;
        return map;
    }, new Map()).values()];

    result.forEach((res) => {
        for(var j=0; j<dataset.length;j++){
            if(res.violation_category === dataset[j].violation_category)
                dates.push(dataset[j].violation_date); 
        }
        updatedResult.push(Object.assign(res, {earliestDate: dates.sort()[0],latestDate: dates.sort()[dates.sort().length-1]}));
        dates = []; 
    })
    
    return ( 
            <div className="table-container"><br/>
                <h1 className="subtitle tag is-black is-large">Summary Table</h1>
                <table className="table is-bordered is-striped is-narrow is-hoverable">
                    <thead>
                       <tr> 
                            <th>Violation Category</th>
                            <th>Total Violation</th>
                            <th>Earliest Date</th>
                            <th>Latest Date</th>
                        </tr>
                    </thead>
                    <tbody>{       
                        updatedResult.map( (result, index) => {
                            return (
                            <tr key={index} align="start">
                                <td>{result.violation_category}</td>
                                <td>{result.count}</td>
                                <td>{result.earliestDate}</td>
                                <td>{result.latestDate}</td>
                            </tr>                     
                        )})
                    }
                    </tbody>
                </table>
            </div>
        );
}

export default CalculateViolations;