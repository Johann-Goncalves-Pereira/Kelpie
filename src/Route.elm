--
-- Route Module
--
-- Keeps all Medsyn frontend routes and helper functions
--


module Route exposing
    ( Route(..)
    , href
    , parseUrl
    , pushUrl
    , replaceUrl
    , routeToString
    )

import Browser.Navigation as Nav
import Html exposing (Attribute)
import Html.Attributes as Attr
import Url exposing (Url)
import Url.Parser as Parser exposing ((</>), Parser, oneOf, s, top)



-- ROUTING


type Route
    = Page1
    | Page2
    | NotFound


matchers : Parser (Route -> a) a
matchers =
    oneOf
        [ Parser.map Page1 top
        , Parser.map Page2 (s "page-2")
        , Parser.map NotFound (s "nao-encontrada")
        ]


{-| Recebe uma Url e retorna uma rota correspondente.

    Route.parseUrl <| Url.Url Url.Https "localhost" (Maybe.Just 3000) "/login" Maybe.Nothing Maybe.Nothing == Login

    Route.parseUrl <| Url.Url Url.Https "localhost" (Maybe.Just 3000) "/home" Maybe.Nothing Maybe.Nothing == Home

-}
parseUrl : Url -> Route
parseUrl url =
    Maybe.withDefault NotFound <|
        Parser.parse matchers url



-- PUBLIC HELPERS


href : Route -> Attribute msg
href targetRoute =
    Attr.href (routeToString targetRoute)


replaceUrl : Nav.Key -> Route -> Cmd msg
replaceUrl key route =
    Nav.replaceUrl key (routeToString route)


pushUrl : Nav.Key -> Route -> Cmd msg
pushUrl key route =
    Nav.pushUrl key (routeToString route)



-- INTERNAL


routeToString : Route -> String
routeToString page =
    let
        pieces =
            case page of
                Page1 ->
                    [ "" ]

                Page2 ->
                    [ "page-2" ]

                NotFound ->
                    [ "nao-encontrada" ]
    in
    "/" ++ String.join "/" pieces
