import React, {Fragment} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ReadPage from "./pages/ReadPage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";
import {Toaster} from "react-hot-toast";


const App = () => {
    return (
            <Fragment>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<ReadPage/>}/>
                        <Route exact path="/create" element={<CreatePage/>}/>
                        <Route exact path="/update" element={<UpdatePage/>}/>
                    </Routes>
                </BrowserRouter>
                <Toaster/>
            </Fragment>

    );
};

export default App;