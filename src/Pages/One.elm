module Pages.One exposing (..)

import Html exposing (Html, a, button, div, form, h2, h3, h4, header, img, input, li, nav, span, text, ul)
import Html.Attributes exposing (alt, class, href, id, placeholder, src, type_)
import Html.Events exposing (onClick)
import Route
import Shared
import String exposing (String)



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
        [ nav [ class "navTop" ]
            -- Left Header
            [ div [ class "logoAndSearch" ]
                [ div [ class "search" ]
                    [ a [ class "aLogo", href "http://localhost:8080/" ] [ img [ class "logoHeader", src "source/logo.svg", alt "KELPIE" ] [] ] ]
                , div [ class "allSearchBar" ]
                    [ form [ class "formSearch" ]
                        [ button [ class "buttonSearch", type_ "submit", alt "Search" ] [ img [ src "source/search.svg" ] [] ]
                        , div [ class "inputSearch" ]
                            [ input [ class "_input", placeholder "Search free high-resolution photos" ] []
                            , div [ class "react-autoWhatever" ] []
                            ]
                        , div [ class "VisualSearch" ]
                            [ button [ class "buttonVisualSearch" ] [ img [ src "source/scan.svg", alt "Visual Search" ] [] ]
                            , div [] []
                            ]
                        ]
                    ]
                ]

            -- Center Header
            , div [ class "centerHeader" ]
                [ ul [ class "ulHeader" ]
                    -- Name of Page
                    [ li [ class "liNamePage" ]
                        [ a [ class "aNamePage" ] [ h2 [] [ text "Home" ] ]
                        ]
                    , li [ class "liBrands" ]
                        [ a [ class "aBrands", href "/brands" ]
                            [ div [ class "divBrands" ] [ h4 [] [ text "Brands", span [ class "spanBrands" ] [ text "New" ] ] ] ]
                        ]
                    , li [ class "liDots" ]
                        [ div [ class "divDots" ]
                            [ button [ class "buttonDots" ]
                                [ img [ src "source/dots.svg", alt "..." ] [] ]
                            , div [] []
                            ]
                        ]
                    ]
                ]

            -- Right Header
            , div [ class "rightHeader" ]
                [ div []
                    [ div [ class "submitPhoto" ]
                        [ button
                            [ class "buttonSubmitPhoto" ]
                            [ a [ id "aSubmitPhoto", href "/Login" ] [ text "Submit Photo" ] ]
                        , div [] []
                        ]
                    ]
                , div
                    [ id "verticalLeft" ]
                    [ button [ class "buttonLogin" ] [ a [ class "aLogin", href "/Login" ] [ text "Login" ] ]
                    , button [ class "buttonJoin" ] [ a [ class "aJoin", href "/Login" ] [ text "Join Free" ] ]
                    ]
                ]
            ]
        , div [ id "tags" ]
            [ h3 [ id "h3Tags" ] [ text "Tags" ]
            , div [ class "verticalRight" ] []
            , div [ class " tagsStyle" ]
                [ ul [ class "ulTags" ]
                    [ li [ class "liTag" ] [ a [ href "*/t/Wallpaper" ] [ text "Wallpaper" ] ]
                    , li [ class "liTag" ] [ a [ href "*/t/People" ] [ text "People" ] ]
                    , li [ class "liTag" ] [ a [ href "*/t/Film" ] [ text "Film" ] ]
                    , li [ class "liTag" ] [ a [ href "*/t/Movie" ] [ text "Movie" ] ]
                    , li [ class "liTag" ] [ a [ href "*/t/Nature" ] [ text "Nature" ] ]
                    , li [ class "liTag" ] [ a [ href "*/t/Dance" ] [ text "Dance" ] ]
                    , li [ class "liTag" ] [ a [ href "*/t/Happy" ] [ text "Happy" ] ]
                    , li [ class "liTag" ] [ a [ href "*/t/Food" ] [ text "Food" ] ]
                    , li [ class "liTag" ] [ a [ href "*/t/Romance" ] [ text "Romance" ] ]
                    , li [ class "liTag" ] [ a [ href "*/t/History" ] [ text "History" ] ]
                    , li [ class "liTag" ] [ a [ href "*/t/Culture" ] [ text "Culture" ] ]
                    , li [ class "liTag" ] [ a [ href "*/t/Animals" ] [ text "Animals" ] ]
                    , li [ class "liTag" ] [ a [ href "*/t/LGBTQ" ] [ text "LGBTQ+" ] ]
                    , li [ class "liTag" ] [ a [ href "*/t/Family" ] [ text "Family" ] ]
                    , li [ class "liTag" ] [ a [ href "*/t/Meme" ] [ text "Meme" ] ]
                    , li [ class "liTag" ] [ a [ href "*/t/Country" ] [ text "Country" ] ]
                    , li [ class "liTag" ] [ a [ href "*/t/Offices" ] [ text "Offices" ] ]
                    , li [ class "liTag" ] [ a [ href "*/t/Materialize" ] [ text "Materialize" ] ]
                    , li [ class "liTag" ] [ a [ href "*/t/Art" ] [ text "Art" ] ]
                    , li [ class "liTag" ] [ a [ href "*/t/Draw" ] [ text "Draw" ] ]
                    , li [ class "liTag" ] [ a [ href "*/t/text" ] [ text "Farm" ] ]
                    ]
               
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
