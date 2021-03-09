module Pages.Two exposing (..)

-- import Browser.Navigation as Nav

import Html exposing (Html, a, button, div, h2, img, input, label, map, p, span, text)
import Html.Attributes exposing (alt, class, id, minlength, name, src, type_, value)
import Html.Events exposing (onClick, onInput)
import Regex
import Route
import Shared exposing (Model)



-----------
-- Model --
-----------


type alias Model =
    { emailField : String
    , emailError : String
    , passwordField : String
    , passwordError : Maybe String
    }


init : Model
init =
    { emailField = ""
    , emailError = ""
    , passwordField = ""
    , passwordError = Nothing
    }


type alias RegexModel =
    { regularNumber : Regex.Regex
    , regularCapitalLetters : Regex.Regex
    , regularSymbols : Regex.Regex
    }


regularExpressionInit : RegexModel
regularExpressionInit =
    { regularNumber =
        Maybe.withDefault Regex.never <|
            Regex.fromString "\\d"
    , regularCapitalLetters =
        Maybe.withDefault Regex.never <|
            Regex.fromString "[A-Z]"
    , regularSymbols =
        Maybe.withDefault Regex.never <|
            Regex.fromString "[!@#$%*^~?]"
    }



---------
-- Msg --
---------


type Msg
    = EmailField String
    | PasswordField String
    | GoToHomePage


type Any value
    = Some value
    | Other value
    | NoValue


type alias Record =
    { v1 : Any String
    , v2 : Any Int
    }



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
                        "Please place a valid Email"
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
            if canSubmit model then
                ( model
                , Route.pushUrl shared.key Route.Page1
                , Shared.UserState True
                )

            else
                ( model, Cmd.none, Shared.NoOp )


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
        capitalValidation =
            Regex.contains
                regularExpressionInit.regularCapitalLetters
                password

        numberValidation =
            Regex.contains
                regularExpressionInit.regularNumber
                password

        symbolsValidation =
            Regex.contains
                regularExpressionInit.regularSymbols
                password
    in
    if passwordLength == 0 then
        Just "The password field it's empty"

    else if passwordLength < 8 then
        Just "Password need to have at least 8 characters"

    else if capitalValidation == False then
        Just "Password need to have at least a capital letter"

    else if numberValidation == False then
        Just "Password need to have at least a number"

    else if symbolsValidation == False then
        Just "Password need to have at least a symbol like ( ! @ # $ % * ^ ~ ? )"

    else
        Nothing


canSubmit : Model -> Bool
canSubmit { emailField, passwordField } =
    if
        isEmailValid emailField
            && isPasswordValid passwordField
            == Nothing
    then
        True

    else
        False



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
                , a [] [ text "WelcomeBack" ]
                , button [ onClick GoToHomePage ] [ text "Submit" ]
                , p [ id "justJoin" ]
                    [ text "Don't have an account?"
                    , a [] [ text "Join" ]
                    ]
                ]
            ]
        ]
