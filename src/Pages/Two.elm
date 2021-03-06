module Pages.Two exposing (..)

-- import Browser.Navigation as Nav

import Html exposing (Html, a, button, div, h2, img, input, label, p, span, text)
import Html.Attributes exposing (alt, class, id, minlength, name, src, type_, value)
import Html.Events exposing (onClick, onInput)
import Route
import Shared



-----------
-- Model --
-----------


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



---------
-- Msg --
---------


type Msg
    = EmailField String
    | PasswordField String
    | GoToHomePage



------------
-- Update --
------------


update : Msg -> Model -> Shared.Model -> ( Model, Cmd Msg, Shared.Msg )
update msg model shared =
    case msg of
        EmailField email ->
            ( { model | emailField = email }
            , Cmd.none
            , Shared.NoOp
            )

        PasswordField password ->
            ( { model | passwordField = password }
            , Cmd.none
            , Shared.NoOp
            )

        GoToHomePage ->
            ( model, Route.pushUrl shared.key Route.Page1, Shared.UserState True )



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
                , label []
                    [ text "Email"
                    , input
                        [ type_ "text"
                        , name "email"
                        , value model.emailField
                        , onInput EmailField
                        ]
                        []
                    ]
                , label []
                    [ text "Password"
                    , input
                        [ minlength 8
                        , type_ "password"
                        , name "password"
                        , value model.passwordField
                        , onInput PasswordField
                        ]
                        []
                    ]
                , a [] [ text "Welcome Back" ]
                , button [ onClick GoToHomePage ] [ text "Submit" ]
                , p [ id "justJoin" ]
                    [ text "Don't have an account?"
                    , a [] [ text "Join" ]
                    ]
                ]
            ]
        ]
