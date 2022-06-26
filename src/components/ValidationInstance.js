import React from 'react';
const ValidationInstance = (props) => {
    return (
        <tr
        // onClick={(e) => {
        //     e.preventDefault();
        //     window.location.href = `/api/projects/${props.projects._id}`;
        // }}
        >
            <td>{props.validationReportItem.id}</td>
            <td>{props.validationReportItem.constrainType}</td>
            <td>{props.validationReportItem.description}</td>
        </tr>
    );
};

export default ValidationInstance;
