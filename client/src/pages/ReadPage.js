import React from 'react';
import ListTable from "../components/Read/ListTable";
import AppNavBar from "../components/Common/AppNavBar";
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

const ReadPage = () => {
    return (
        <MDBCard>
        <MDBCardBody>
            <AppNavBar></AppNavBar>
            <ListTable></ListTable>
            </MDBCardBody>
            </MDBCard>
    );
};

export default ReadPage;