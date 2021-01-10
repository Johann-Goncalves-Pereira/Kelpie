module Shared exposing (Model, Msg(..), init, update)

import Browser.Navigation as Nav
import Url



---------
-- Msg --
---------


type Msg
    = NoOp
    | UpdateTextField String
    | UpdateUrl Url.Url



-----------
-- Model --
-----------


type alias Model =
    { textField : String
    , key : Nav.Key
    , url : Url.Url
    }


init : Nav.Key -> Url.Url -> Model
init key url =
    { textField = ""
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

        UpdateTextField text ->
            { model | textField = text }

        UpdateUrl url ->
            { model | url = url }
