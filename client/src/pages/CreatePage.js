import React from 'react';
import CreateForm from "../components/Create/CreateForm";
import AppNavBar from "../components/Common/AppNavBar";

const CreatePage = () => {
    return (
        <div>
            <AppNavBar></AppNavBar>
            <CreateForm></CreateForm>
        </div>
    );
};

export default CreatePage;