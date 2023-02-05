import React from 'react';
import AppNavBar from "../components/Common/AppNavBar";
import UpdateForm from "../components/Update/UpdateForm";
import {useParams} from "react-router";
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

const UpdatePage = () => {
    const params=useParams()
    return (
        <MDBCard>
        <MDBCardBody>
            <AppNavBar></AppNavBar>
            <UpdateForm id={params['id']}/>
            </MDBCardBody>
            </MDBCard>
    );
};

export default UpdatePage;