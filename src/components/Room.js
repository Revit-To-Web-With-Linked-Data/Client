import React from 'react';
const Room = (props) => {
    return (
        <tr
            // onClick={(e) => {
            //     e.preventDefault();
            //     window.location.href = `/api/projects/${props.projects._id}`;
            // }}
        >
            <td>{props.rooms}</td>

        </tr>
    );
};

export default Room;
