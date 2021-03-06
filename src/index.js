import { Elm } from "./Main.elm";
import "./stylesheet/header.scss";
import "./stylesheet/imageGrid.scss";
import "./stylesheet/index.scss";
import "./stylesheet/login.scss";


console.log(ENV);

Elm.Main.init({
    node: document.getElementById("app")
});
