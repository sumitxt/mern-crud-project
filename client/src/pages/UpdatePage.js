import React from 'react';
import AppNavBar from "../components/Common/AppNavBar";
import UpdateForm from "../components/Update/UpdateForm";
import {useParams} from "react-router";

const UpdatePage = () => {
    const params=useParams()
    return (
        <div>
            <AppNavBar></AppNavBar>
            <UpdateForm id={params['id']}/>
        </div>
    );
};

export default UpdatePage;