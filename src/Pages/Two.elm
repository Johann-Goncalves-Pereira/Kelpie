module Pages.Two exposing (..)

-- import Browser.Navigation as Nav

import Bitwise exposing (and)
import Html exposing (Html, a, button, div, h2, i, img, input, label, map, p, span, text)
import Html.Attributes exposing (alt, class, id, minlength, name, src, type_, value)
import Html.Events exposing (onClick, onInput)
import Regex
import Route
import Shared exposing (Model)
import String exposing (join)
import Url.Parser.Query exposing (int)



-----------
-- Model --
-----------


type alias Model =
    { emailField : String
    , emailError : String
    , passwordField : String
    , passwordError : Maybe String
    , columns : List Int
    }


init : Model
init =
    { emailField = ""
    , emailError = ""
    , passwordField = ""
    , passwordError = Nothing
    , columns = []
    }



-- type alias RegexModel =
--     { regularNumber : Regex.Regex
--     , character : Regex.Regex
--     }


regularExpression : Regex.Regex
regularExpression =
    Maybe.withDefault Regex.never <|
        Regex.fromString "\\d"



-- \\s!@#$%*+=^~?`´
---------
-- Msg --
---------


type Msg
    = EmailField String
    | PasswordField String
    | GoToHomePage



-- type ErrorMsg
--     = PasswordError Maybe String
------------
-- Update --
------------


update : Msg -> Model -> Shared.Model -> ( Model, Cmd Msg, Shared.Msg )
update msg model shared =
    case msg of
        EmailField email ->
            let
                emailError =
                    if isEmailValid email then
                        ""

                    else
                        "Email Invalid"
            in
            ( { model
                | emailField = email
                , emailError = emailError
              }
            , Cmd.none
            , Shared.NoOp
            )

        PasswordField password ->
            ( { model
                | passwordField = password
                , passwordError = isPasswordValid password
              }
            , Cmd.none
            , Shared.NoOp
            )

        GoToHomePage ->
            ( model
            , Route.pushUrl shared.key Route.Page1
            , Shared.UserState True
            )


isEmailValid : String -> Bool
isEmailValid email =
    let
        emailParts =
            String.split "@" email

        dotRules =
            emailParts
                |> List.tail
                |> Maybe.withDefault []
                |> String.join ""
                |> String.contains "."
    in
    if not <| String.contains "@" email then
        False
        -- Need to have a @

    else if String.startsWith "@" email then
        False
        -- The @ can not be the first character

    else if (emailParts |> List.length) /= 2 then
        False
        -- Just have one @ and have two Strings on the sides of @

    else if not dotRules then
        False
        -- After @ need to have a String with at least a dot

    else if String.endsWith "." email then
        False
        -- The dot couldn't be the last character of String

    else
        True


isPasswordValid : String -> Maybe String
isPasswordValid password =
    let
        passwordLength =
            String.length password

        -- takes number of characters on password and transform in a Int
        numberValidation =
            Regex.contains regularExpression password

        -- charactersValidation =
        --     Regex.contains regexInit.regularCharacter password
    in
    if passwordLength == 0 then
        Just "The password field it's empty"

    else if passwordLength < 8 then
        Just "Password need to have at least 8 characters"

    else if numberValidation == False then
        Just "Password need to have at least a number"

    else
        Nothing



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
    let
        passwordError =
            case model.passwordError of
                Just err ->
                    p [] [ text err ]

                Nothing ->
                    text ""
    in
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
                    , p [] [ text model.emailError ]
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
                    , passwordError
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
