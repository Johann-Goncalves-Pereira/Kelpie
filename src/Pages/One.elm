module Pages.One exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput)
import Route
import Shared
import String exposing (String)



---------
-- Msg --
---------


type Msg
    = SrcOfImg
    | NameTags



--    | GoToPage2
-----------
-- Model --
-----------


type alias Model =
    { images : List String
    , topbar : TopBar
    }


type alias TopBar =
    { searchBar : String
    , login : String
    , tags : List String
    }


init : Model
init =
    { images = []
    , topbar =
        { searchBar = ""
        , login = ""
        , tags = []
        }
    }



------------
-- Update --
------------


update : Msg -> Model -> Model
update msg model =
    case msg of
        SrcOfImg ->
            { model | images = [] }

        NameTags ->
            let
                tb =
                    model.topbar

                tbNew =
                    { tb | tags = [] }
            in
            { model | topbar = tbNew }


imgPath : Model -> Model
imgPath path =
    let
        ph =
            "./images/"

        -- *.png
        -- *.jpg
        -- *.jpeg
    in
    { path | images = [ ph, ph ] }



{-
   pageOne : Model -> Shared.Model -> ( Model, Cmd Msg, Shared.Msg )
   pageOne model shared =
       GoToPage2
           ( model, Route.pushUrl shared.key Route.Page2, Shared.NoOp )
-}
----------
-- View --
----------


view : Model -> Html Msg
view model =
    div []
        [{- button [ onClick GoToPage2 ] [ text "Go to page 2!" ] -}]
