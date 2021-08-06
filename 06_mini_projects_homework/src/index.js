import React from "react";
import {AppContextProvider} from "./Contexts/AppContexts";
import App from "./App";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

render(<AppContextProvider><App /></AppContextProvider>, document.getElementById("root"));
