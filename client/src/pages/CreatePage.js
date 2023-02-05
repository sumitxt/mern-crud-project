import React from 'react';
import AppNavBar from "../components/Common/AppNavBar";
import CreateForm from "../components/Create/CreateForm";
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

const CreatePage = () => {
    return (

        <MDBCard>
            <MDBCardBody>
                <AppNavBar />
                <CreateForm />
            </MDBCardBody>
            </MDBCard>
            );
};

            export default CreatePage;