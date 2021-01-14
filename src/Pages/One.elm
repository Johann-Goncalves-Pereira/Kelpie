module Pages.One exposing (..)

import Html exposing (Html, a, button, div, h2, h3, header, img, input, li, nav, text)
import Html.Attributes exposing (alt, class, href, id, placeholder, size, src, type_)
import Html.Events exposing (onClick, onInput)
import Random
import Route
import Shared
import String exposing (String)
import Svg
import Svg.Attributes as SvgAttributes



-- Svg.Attributes = SvgAttributes
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
    header []
        [ nav
            [ class "header" ]
            [ div [ class "search" ]
                [ div [ class "logoHeader" ]
                    [ img
                        [ src "source/logo.svg"
                        , alt "KELPIE"
                        ]
                        [ a [ href "http://localhost:8080/" ] [] ]
                    ]
                , button [ class "buttonSearch", type_ "submit", alt "Search" ]
                    [ img [ src "source/search.svg" ] [] ]
                , input [ placeholder "Search free high-resolution photos" ] []
                , button [ class "buttonVisualSearch" ] [ img [ src "source/scan.svg", alt "Visual Search" ] [] ]
                ]
            , div [ class "centerHeader" ]
                [ li [] [ h2 [] [ text "Home" ] ]

                -- one more page
                , li [] [ a [ href "*brands" ] [ text "Brands" ] ]
                , li []
                    [ div []
                        [ button []
                            [ img [ src "source/dots.svg", alt "..." ] [] ]
                        ]
                    ]
                , li []
                    [ div [ class "submitPhoto" ]
                        [ button
                            []
                            [ text "Submit Photo" ]
                        ]
                    ]
                ]
            , div [ class "rightHeader" ]
                [ div
                    [ id "verticalLeft" ]
                    [ button [] [ a [ href "*login" ] [ text "Login" ] ]
                    , button [] [ a [ href "*join" ] [ text "Join Free" ] ]
                    ]
                ]
            ]
        , div [ id "tags" ]
            [ h3 [ id "verticalRight" ] [ text "Tags" ]
            , li [ class " listTags" ]
                [ a [ href "*/t/nameOfTag" ] [ text "People" ]
                , a [ href "*/t/nameOfTag" ] [ text "Film" ]
                , a [ href "*/t/nameOfTag" ] [ text "Movie" ]
                , a [ href "*/t/nameOfTag" ] [ text "Nature" ]
                , a [ href "*/t/nameOfTag" ] [ text "Dance" ]
                , a [ href "*/t/nameOfTag" ] [ text "Happy" ]
                , a [ href "*/t/nameOfTag" ] [ text "Food" ]
                , a [ href "*/t/nameOfTag" ] [ text "Romance" ]
                , a [ href "*/t/nameOfTag" ] [ text "History" ]
                , a [ href "*/t/nameOfTag" ] [ text "Culture" ]
                , a [ href "*/t/nameOfTag" ] [ text "Animals" ]
                , a [ href "*/t/nameOfTag" ] [ text "LGBTQ+" ]
                , a [ href "*/t/nameOfTag" ] [ text "Family" ]
                , a [ href "*/t/nameOfTag" ] [ text "Meme" ]
                , a [ href "*/t/nameOfTag" ] [ text "Country" ]
                , a [ href "*/t/nameOfTag" ] [ text "Offices" ]
                , a [ href "*/t/nameOfTag" ] [ text "Materialize" ]
                , a [ href "*/t/nameOfTag" ] [ text "Art" ]
                , a [ href "*/t/nameOfTag" ] [ text "Draw" ]
                , a [ href "*/t/nameOfTag" ] [ text "Farm" ]
                ]
            ]
        ]



--


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
