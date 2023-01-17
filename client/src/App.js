import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import ReadPage from "./pages/ReadPage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";

class App extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<ReadPage/>}/>
                        <Route exact path="/create" component={<CreatePage/>}/>
                        <Route exact path="/update" component={<UpdatePage/>}/>
                    </Routes>
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default App;