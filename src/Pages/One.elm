module Pages.One exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput)
import Random
import Route
import Shared
import String exposing (String)
import Svg
import Svg.Attributes as SvgAttributes



---------
-- Msg --
---------


type Msg
    = InputTextField String
    | InputShared String
    | GoToPage2



-----------
-- Model --
-----------


type alias Model =
    { textField : String
    }


init : Model
init =
    { textField = ""
    }



------------
-- Update --
------------


update : Msg -> Model -> Shared.Model -> ( Model, Cmd Msg, Shared.Msg )
update msg model shared =
    case msg of
        InputTextField text ->
            ( { model | textField = text }
            , Cmd.none
            , Shared.NoOp
            )

        InputShared text ->
            ( model, Cmd.none, Shared.UpdateTextField text )

        GoToPage2 ->
            ( model, Route.pushUrl shared.key Route.Page2, Shared.NoOp )



----------
-- View --
----------


view : Model -> Shared.Model -> ( String, Html Msg )
view model shared =
    ( "Home"
    , viewPage model shared
    )



--  headerPage model
--     , imgDisplay model


viewPage : Model -> Shared.Model -> Html Msg
viewPage model shared =
    div [ class "bodyElm" ]
        [ headerPage model
        , imgDisplay model
        , button [ onClick GoToPage2 ] [ text "Go to page 2!" ]
        ]


headerPage : Model -> Html Msg
headerPage model =
    header [ class "header" ]
        [ div [ class "logoHeader" ]
            [ img
                [ src "source/logo.svg"
                , alt "KELPIE"
                ]
                [ a [ href "http://localhost:8080/" ] [] ]
            ]
        , div [ class "search" ]
            [ button [ type_ "submit", alt "Search" ]
                [ img [ src "source/search.svg" ] [] ]
            , input
                [ type_ "text"
                , placeholder "Search free high-resolution photos"
                ]
                []
            , button [] [ img [ src "source/scan.svg", alt "Visual Search" ] [] ]
            ]
        , div [ class "centerHeader" ]
            [ h2 [] [ text "Home" ]
            , a [ href "*brands" ] [ text "Brands" ]
            , a [ href "*explore" ] [ text "Explore" ]
            , button
                [{--}
                ]
                [{- ... -}]
            , button
                [{--}
                ]
                [ {--}
                  text "Submit Photo"
                ]
            ]
        , div [ class "rightHeader" ]
            [ a [ href "*login" ] [ text "|" ]
            , a [ href "*login" ] [ text "Login" ]
            , a [ href "*join" ] [ text "Join Free" ]
            ]
        , div []
            [ h3 [] [ text "Tags" ]
            , a [ href "#" ] [ text "|" ]
            ]
        ]


imgDisplay : Model -> Html Msg
imgDisplay model =
    div [ class "imgs" ]
        [ img [ src "images/01.jpeg" ] []
        , img [ src "images/02.jpeg" ] []
        , img [ src "images/03.jpeg" ] []
        , img [ src "images/04.jpeg" ] []
        ]



{- module Pages.One exposing (..)





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



   {-
      imgPath : Model -> Model
      imgPath path =
          let
              ph =
                  "./images/"

              -- *.png
              -- *.jpg
              -- *.jpeg
          in
          { path | images = [ ph, ph, ph ] }


      roll : Random.Generator Int
      roll =
          Random.int 1 4
   -}

   ----------
   -- View --
   ----------


   view : Model -> Html Msg
   view model =
       div []
           [ headerPage model
           , imgDisplay model
           ]
-}
