module Pages.NotFound exposing (Msg, update, view)

import Html exposing (..)
import Html.Events exposing (onClick)
import Route
import Shared



---------
-- Msg --
---------


type Msg
    = GoToHome



------------
-- Update --
------------


update : Msg -> Shared.Model -> Cmd Msg
update msg shared =
    case msg of
        GoToHome ->
            Route.pushUrl shared.key Route.Page1



----------
-- View --
---------


view : ( String, Html Msg )
view =
    ( "Página não encontrada!"
    , viewPage
    )


viewPage : Html Msg
viewPage =
    div
        []
        [ section []
            [ p []
                [ text "Ops! Algo de errado aconteceu! Você tentou acessar um recurso que não existe!" ]
            , div
                []
                [ button
                    [ onClick GoToHome ]
                    [ text "Ir para tela inicial" ]
                ]
            ]
        ]
