import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { AddPlayer } from "../screens/addPlayer"

export const MainRouter = () => {
    const [add, setAdd] = useState(true);
    const GotoAdd = () => {
        setAdd(false)
        return <AddPlayer />
    }
    const GotoHome =() => {
        setAdd(true)
        return <Home />
    }
    return (
        <Router>
            <div>
                {add && <Link className="App-link" to="/add">Add Player</Link>}
                {!add && <Link className="App-link" to="/">Home</Link>}
                <Switch>
                    <Route path="/add">
                        <GotoAdd />
                    </Route>

                    <Route path="/">
                        <GotoHome />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {

    return <h2>Home</h2>;
}

