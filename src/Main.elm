module Main exposing (..)

import Browser exposing (Document)
import Browser.Dom as Dom
import Browser.Navigation as Nav
import Html exposing (Html, button, div, img, p, section, text)
import Html.Events exposing (onClick)
import Pages
import Route exposing (Route)
import Shared
import Task
import Url exposing (Url)



---------
-- Msg --
---------


type Msg
    = NoOp
    | LinkClicked Browser.UrlRequest
    | UrlChanged Url
    | PagesMsg Pages.Msg



-----------
-- Model --
-----------


type alias Model =
    { shared : Shared.Model
    , page : Pages.Model
    }


init : () -> Url -> Nav.Key -> ( Model, Cmd Msg )
init _ url key =
    let
        ( page, cmd ) =
            url
                |> Route.parseUrl
                |> Pages.fromRoute
    in
    ( { shared = Shared.init key url
      , page = page
      }
    , Cmd.map PagesMsg cmd
    )



------------
-- Update --
------------


update : Msg -> Model -> ( Model, Cmd Msg )
update msg ({ shared } as model) =
    case msg of
        NoOp ->
            ( model, Cmd.none )

        LinkClicked (Browser.Internal url) ->
            ( model, Route.pushUrl shared.key (Route.parseUrl url) )

        LinkClicked (Browser.External href) ->
            ( model, Nav.load href )

        UrlChanged url ->
            let
                ( page, cmd ) =
                    url
                        |> Route.parseUrl
                        |> Pages.fromRoute
            in
            ( { model | page = page }, Cmd.map PagesMsg cmd )

        PagesMsg pagesMsg ->
            let
                ( newPage, cmd, sharedMsg ) =
                    Pages.update pagesMsg model.page shared

                newShared =
                    Shared.update sharedMsg shared
            in
            ( { model | page = newPage, shared = newShared }, Cmd.map PagesMsg cmd )



----------
-- View --
----------


view : Model -> Document Msg
view model =
    let
        ( title, body ) =
            Pages.view model.page model.shared
    in
    { title = "Boilerplate - " ++ title
    , body = [ Html.map PagesMsg body ]
    }



----------
-- Main --
----------


main : Program () Model Msg
main =
    Browser.application
        { init = init
        , view = view
        , update = update
        , subscriptions = \_ -> Sub.none
        , onUrlChange = UrlChanged
        , onUrlRequest = LinkClicked
        }
