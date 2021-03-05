module Pages.Two exposing (..)

-- import Browser.Navigation as Nav

import Html exposing (Html, a, button, div, h2, img, input, p, span, text)
import Html.Attributes exposing (alt, class, id, minlength, src, type_, value)
import Html.Events exposing (onClick, onInput)
import Route
import Shared



---------
-- Msg --
---------


type Msg
    = EmailField String
    | PasswordField String
    | GoToHomePage



-----------
-- Model --
-----------
-- email password
-- make a msg that save the String of email input


type alias Model =
    { emailField : String
    , passwordField : String
    , columns : List Int
    }


init : Model
init =
    { emailField = ""
    , passwordField = ""
    , columns = []
    }



------------
-- Update --
------------


update : Msg -> Model -> Shared.Model -> ( Model, Cmd Msg, Shared.Msg )
update msg model shared =
    case msg of
        EmailField text ->
            ( { model | emailField = text }
            , Cmd.none
            , Shared.NoOp
            )

        PasswordField password ->
            ( { model | passwordField = password }
            , Cmd.none
            , Shared.NoOp
            )

        GoToHomePage ->
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
                    [ img
                        [ src "source/logo.svg"
                        , alt "Logo"
                        ]
                        []
                    , h2 [] [ text "Login" ]
                    , p [] [ text "Welcome Back" ]
                    ]
                , div
                    [ class "automaticLogin"
                    , class "grid-row"
                    ]
                    [ a []
                        [ img
                            [ id "comercialLogo"
                            , src "source/facebook.svg"
                            ]
                            []
                        , text "Login with Facebook"
                        ]
                    , a []
                        [ img
                            [ id "comercialLogo"
                            , src "source/google.svg"
                            ]
                            []
                        , text "Login with Google"
                        ]
                    ]
                , p [ id "or" ] [ text "or" ]
                , span []
                    [ text "Email"
                    , input
                        [ type_ "text"
                        , value model.emailField
                        , onInput EmailField
                        ]
                        []
                    ]
                , span []
                    [ text "Password"
                    , input
                        [ minlength 8
                        , type_ "password"
                        , value model.passwordField
                        , onInput PasswordField
                        ]
                        []
                    ]
                , a [] [ text "Welcome Back" ]
                , button [ onClick GoToHomePage ] [ text "Login" ]
                , p [ id "justJoin" ]
                    [ text "Don't have an account?"
                    , a [] [ text "Join" ]
                    ]
                ]
            ]
        ]
