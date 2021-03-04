module Pages.Two exposing (..)

import Browser.Navigation as Nav
import Html exposing (Html, a, button, div, h2, img, input, p, span, text)
import Html.Attributes exposing (alt, class, id, minlength, src, type_)
import Html.Events exposing (onClick)
import Route exposing (href)
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
    ( "Login"
    , viewPage model shared
    )


viewPage : Model -> Shared.Model -> Html Msg
viewPage model shared =
    div [ class "bodyElm" ]
        [ div [ class "loginContainer" ]
            [ div [ class "loginBlock" ]
                [ div [ class "loginStatic" ]
                    [ img [ src "source/logo.svg", alt "Logo" ] []
                    , h2 [] [ text "Login" ]
                    , p [] [ text "Welcome Back" ]
                    ]
                , div [ class "automaticLogin", class "grid-row" ]
                    [ a [] [ img [ id "comercialLogo", src "source/facebook.svg" ] [], text "Login with Facebook" ]
                    , a [] [ img [ id "comercialLogo", src "source/google.svg" ] [], text "Login with Google" ]
                    ]
                , p [ id "or" ] [ text "or" ]
                , span [] [ text "Email", input [] [] ]
                , span [] [ text "Password", input [ minlength 8, type_ "password" ] [] ]
                , a [] [ text "Welcome Back" ]
                , button [] [ text "Login" ]
                , p [ id "justJoin" ] [ text "Don't have an account?", a [] [ text "Join" ] ]
                ]
            ]
        ]
