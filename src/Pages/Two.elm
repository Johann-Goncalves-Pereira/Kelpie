module Pages.Two exposing (..)

import Browser.Navigation as Nav
import Html exposing (Html, button, div, text)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)
import Route
import Shared



---------
-- Msg --
---------


type Msg
    = Increment
    | Decrement
    | IncrementShared
    | DecrementShared
    | GoToPage1



-----------
-- Model --
-----------


type alias Model =
    { counter : Int
    }


init : Model
init =
    { counter = 0
    }



------------
-- Update --
------------


update : Msg -> Model -> Shared.Model -> ( Model, Cmd Msg, Shared.Msg )
update msg model shared =
    case msg of
        Increment ->
            ( { model | counter = model.counter + 1 }, Cmd.none, Shared.NoOp )

        Decrement ->
            ( { model | counter = model.counter - 1 }, Cmd.none, Shared.NoOp )

        IncrementShared ->
            ( model
            , Cmd.none
            , Shared.UpdateTextField <| shared.textField ++ "+"
            )

        DecrementShared ->
            ( model
            , Cmd.none
            , Shared.UpdateTextField <| String.left (String.length shared.textField - 1) shared.textField
            )

        GoToPage1 ->
            ( model, Route.pushUrl shared.key Route.Page1, Shared.NoOp )



----------
-- View --
----------


view : Model -> Shared.Model -> ( String, Html Msg )
view model shared =
    ( "Página 2"
    , viewPage model shared
    )


viewPage : Model -> Shared.Model -> Html Msg
viewPage model shared =
    div []
        [ div [ class "title" ] [ text "Contador local: " ]
        , button [ onClick Increment ] [ text "+" ]
        , div [] [ text <| String.fromInt model.counter ]
        , button [ onClick Decrement ] [ text "-" ]
        , div [ class "title" ] [ text "Quantidade de letras da palavra da Shared: " ]
        , button [ onClick IncrementShared ] [ text "+" ]
        , div [] [ text <| String.fromInt <| String.length shared.textField ]
        , button [ onClick DecrementShared ] [ text "-" ]
        , div []
            [ button [ onClick GoToPage1 ] [ text "Go to page 1!" ]
            ]
        ]
