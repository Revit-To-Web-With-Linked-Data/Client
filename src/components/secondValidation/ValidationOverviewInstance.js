import React from 'react';
import { useNavigate } from 'react-router-dom';

const ValidationInstance = (props) => {
const navigate = useNavigate();

    const goToPage = (e) => {
        e.preventDefault();

        navigate(`/${props.validationReportItem.type}`+"2");
    }
    return (
        <tr onClick={goToPage}
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
