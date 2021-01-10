module Pages exposing (Model, Msg, fromRoute, update, view)

import Html exposing (Html)
import Pages.NotFound as NotFound
import Pages.One as PageOne
import Pages.Two as PageTwo
import Route exposing (Route)
import Shared



---------
-- Msg --
---------


type Msg
    = PageOneMsg PageOne.Msg
    | PageTwoMsg PageTwo.Msg
    | NotFoundMsg NotFound.Msg



-----------
-- Model --
-----------


type Model
    = PageOne PageOne.Model
    | PageTwo PageTwo.Model
    | NotFound


fromRoute : Route -> ( Model, Cmd Msg )
fromRoute route =
    case route of
        Route.Page1 ->
            ( PageOne PageOne.init, Cmd.none )

        Route.Page2 ->
            ( PageTwo PageTwo.init, Cmd.none )

        Route.NotFound ->
            ( NotFound, Cmd.none )



------------
-- Update --
------------


update : Msg -> Model -> Shared.Model -> ( Model, Cmd Msg, Shared.Msg )
update msg model shared =
    case ( msg, model ) of
        ( PageOneMsg pageOneMsg, PageOne pageOneModel ) ->
            let
                ( newPageOneModel, cmd, sharedMsg ) =
                    PageOne.update pageOneMsg pageOneModel shared
            in
            ( PageOne newPageOneModel, Cmd.map PageOneMsg cmd, sharedMsg )

        ( PageOneMsg _, _ ) ->
            ( model, Cmd.none, Shared.NoOp )

        ( PageTwoMsg pageTwoMsg, PageTwo pageTwoModel ) ->
            let
                ( newPageTwoModel, cmd, sharedMsg ) =
                    PageTwo.update pageTwoMsg pageTwoModel shared
            in
            ( PageTwo newPageTwoModel, Cmd.map PageTwoMsg cmd, sharedMsg )

        ( PageTwoMsg _, _ ) ->
            ( model, Cmd.none, Shared.NoOp )

        ( NotFoundMsg pageTwoMsg, NotFound ) ->
            let
                cmd =
                    NotFound.update pageTwoMsg shared
            in
            ( NotFound, Cmd.map NotFoundMsg cmd, Shared.NoOp )

        ( NotFoundMsg _, _ ) ->
            ( model, Cmd.none, Shared.NoOp )



----------
-- View --
----------


view : Model -> Shared.Model -> ( String, Html Msg )
view model shared =
    case model of
        PageOne pageOneModel ->
            Tuple.mapSecond (Html.map PageOneMsg) <| PageOne.view pageOneModel shared

        PageTwo pageTwoModel ->
            Tuple.mapSecond (Html.map PageTwoMsg) <| PageTwo.view pageTwoModel shared

        NotFound ->
            Tuple.mapSecond (Html.map NotFoundMsg) <| NotFound.view
