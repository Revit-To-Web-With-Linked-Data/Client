import React from 'react';
const ValidationInstance = (props) => {
    return (
        <tr
        // onClick={(e) => {
        //     e.preventDefault();
        //     window.location.href = `/api/projects/${props.projects._id}`;
        // }}
        >
            <td>{props.validationReportItem.type}</td>
            <td>{props.validationReportItem.amount}</td>
        </tr>
    );
};

export default ValidationInstance;
