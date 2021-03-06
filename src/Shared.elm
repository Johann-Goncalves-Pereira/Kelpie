module Shared exposing (Model, Msg(..), init, update)

import Browser.Navigation as Nav
import Url



---------
-- Msg --
---------


type Msg
    = NoOp
    | UserState Bool
    | UpdateTextField String
    | UpdateUrl Url.Url



-----------
-- Model --
-----------


type alias Model =
    { textField : String
    , userState : Bool
    , key : Nav.Key
    , url : Url.Url
    }


init : Nav.Key -> Url.Url -> Model
init key url =
    { textField = ""
    , userState = False
    , key = key
    , url = url
    }



------------
-- Update --
------------


update : Msg -> Model -> Model
update msg model =
    case msg of
        NoOp ->
            model

        UserState status ->
            { model | userState = status }

        UpdateTextField text ->
            { model | textField = text }

        UpdateUrl url ->
            { model | url = url }
