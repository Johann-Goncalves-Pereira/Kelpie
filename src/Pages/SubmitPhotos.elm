module Pages.SubmitPhotos exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)


type alias Model =
    { modalState : Bool }


init : Model
init =
    { modalState = False }


type Msg
    = NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( { model | modalState = False }
            , Cmd.none
            )


view : Model -> Html Msg
view model =
    main_ []
        [ p [] []
        , a []
            []
        , div
            []
            [ img []
                []
            , strong
                []
                [ a [] []
                ]
            , ul []
                [ li [] []
                , li [] []
                ]
            , ul []
                [ li [] []
                , li [] []
                ]
            , ul []
                [ li [] []
                , li [] []
                ]
            ]
        , footer []
            [ p [] []
            , button [] []
            , button [] []
            ]
        ]
