import React, {Fragment} from 'react';
import {BrowserRouter} from "react-router-dom";
import ReadPage from "./pages/ReadPage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";
import {Toaster} from "react-hot-toast";
import {Route, Switch} from "react-router";


const App = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={(props)=><ReadPage {...props} key={Date.now()} />}/>
                    <Route exact path="/create" render={(props)=><CreatePage {...props} key={Date.now()} />}/>
                    <Route exact path="/update/:id" render={(props)=><UpdatePage {...props} key={Date.now()} />}/>
                </Switch>
            </BrowserRouter>
            <Toaster/>
        </Fragment>

    );
};

export default App;