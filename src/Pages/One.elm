module Pages.One exposing (..)

import Browser.Navigation as Nav
import Html exposing (..)
import Html.Attributes exposing (type_, value)
import Html.Events exposing (onClick, onInput)
import Route
import Shared



---------
-- Msg --
---------


type Msg
    = InputTextField String
    | InputShared String
    | GoToPage2



-----------
-- Model --
-----------


type alias Model =
    { textField : String
    }


init : Model
init =
    { textField = ""
    }



------------
-- Update --
------------


update : Msg -> Model -> Shared.Model -> ( Model, Cmd Msg, Shared.Msg )
update msg model shared =
    case msg of
        InputTextField text ->
            ( { model | textField = text }
            , Cmd.none
            , Shared.NoOp
            )

        InputShared text ->
            ( model, Cmd.none, Shared.UpdateTextField text )

        GoToPage2 ->
            ( model, Route.pushUrl shared.key Route.Page2, Shared.NoOp )



----------
-- View --
----------


view : Model -> Shared.Model -> ( String, Html Msg )
view model shared =
    ( "Página 1"
    , viewPage model shared
    )


viewPage : Model -> Shared.Model -> Html Msg
viewPage model shared =
    div []
        [ span []
            [ text "Shared: " ]
        , input
            [ type_ "text"
            , value shared.textField
            , onInput InputShared
            ]
            []
        , br [] []
        , span []
            [ text "Local: " ]
        , input
            [ type_ "text"
            , value model.textField
            , onInput InputTextField
            ]
            []
        , div [] [ text <| ("Upper: " ++ String.toUpper model.textField) ]
        , div [] [ text <| ("Lower: " ++ String.toLower model.textField) ]
        , button [ onClick GoToPage2 ] [ text "Go to page 2!" ]
        ]
