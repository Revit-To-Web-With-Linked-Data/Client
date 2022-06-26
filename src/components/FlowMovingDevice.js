import React from 'react';
const FlowMovingDevice = (props) => {
    console.log(props);
    return (
        <tr
        // onClick={(e) => {
        //     e.preventDefault();
        //     window.location.href = `/api/projects/${props.projects._id}`;
        // }}
        >
            <td>{props.flowMovingDevices[0]}</td>
            <td>{props.flowMovingDevices[1]}</td>
            <td>{props.flowMovingDevices[2]}</td>
            <td>{props.flowMovingDevices[3]}</td>
        </tr>
    );
};

export default FlowMovingDevice;
