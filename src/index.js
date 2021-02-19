import "./stylesheet/index.scss";
import "./stylesheet/header.scss";
import "./stylesheet/imgGrid.scss"
import { Elm } from "./Main.elm";

console.log(ENV);

Elm.Main.init({
    node: document.getElementById("app")
});
