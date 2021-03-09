module Pages.One exposing (..)

import Html exposing (Html, a, button, div, form, h2, h3, h4, header, img, input, li, nav, span, text, ul)
import Html.Attributes exposing (alt, class, href, id, placeholder, src, type_)
import Html.Events exposing (onClick)
import Route
import Shared



-----------
-- Model --
-----------


type alias Model =
    { userSharedStatus : Bool

    --
    }


init : Model
init =
    { userSharedStatus = False
    }



---------
-- Msg --
---------


type Msg
    = GoToLogin



------------
-- Update --
------------


update : Msg -> Model -> Shared.Model -> ( Model, Cmd Msg, Shared.Msg )
update msg model shared =
    case msg of
        GoToLogin ->
            ( model, Route.pushUrl shared.key Route.Page2, Shared.NoOp )



----------
-- View --
----------


view : Model -> Shared.Model -> ( String, Html Msg )
view model shared =
    ( "Home"
    , viewPage model shared
    )


viewPage : Model -> Shared.Model -> Html Msg
viewPage model shared =
    div [ class "bodyElm" ]
        [ headerPage model shared
        , imageDisplay model
        ]


headerPage : Model -> Shared.Model -> Html Msg
headerPage model shared =
    header []
        [ nav [ class "headerObjects" ]
            [ div [ class "leftHeader" ]
                [ a [ href "http://localhost:8080/" ]
                    [ img
                        [ class "logoHeader"
                        , src "source/logo.svg"
                        , alt "KELPIE"
                        ]
                        []
                    ]
                , form [ class "formSearch" ]
                    [ button
                        [ type_ "submit"
                        , alt "Search"
                        ]
                        [ img [ src "source/search.svg" ] [] ]
                    , input
                        [ placeholder "Search free high-resolution photos"
                        ]
                        []
                    , div [ class "react-autoWhatever" ] []
                    , button [ class "visualSearch" ]
                        [ img
                            [ src "source/scan.svg"
                            , alt "Visual Search"
                            ]
                            []
                        ]
                    , div [] []
                    ]
                ]

            -- Center Header
            , div [ class "centerHeader" ]
                [ ul []
                    -- Name of Page
                    [ li [ class "currentPage" ]
                        [ a [] [ h2 [] [ text "Home" ] ]
                        ]
                    , li [ class "brands" ]
                        [ a [ href "/brands" ]
                            [ text "Brands"
                            , span [] [ text "New" ]
                            ]
                        ]
                    , li [ class "placeHolderOptions" ]
                        [ button []
                            [ img [ src "source/dots.svg", alt "..." ] [] ]
                        , div [] []
                        ]
                    ]
                ]

            -- Right Header
            , div [ class "rightHeader" ]
                [ button
                    []
                    [ text "Submit Photo" ]
                , sharedStatus model shared
                ]
            ]

        -- Tags
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


sharedStatus : Model -> Shared.Model -> Html Msg
sharedStatus model shared =
    if shared.userState == False then
        div [ class "usersStatus" ]
            [ button [ onClick GoToLogin ] [ text "Login" ]
            , button [ onClick GoToLogin ] [ text "Join Free" ]
            ]

    else
        div [ class "usersStatus" ]
            [ a [] [ img [ src "source/bell.svg" ] [] ]
            , a [] [ img [ src "images/_.jpeg" ] [] ]
            ]


imageDisplay : Model -> Html Msg
imageDisplay model =
    div [ class "imgContainer" ]
        [ div [ class "imgGrid" ]
            [ div [ class "imgColumns" ]
                --  I need to make this three columns torn in to 2 and 1
                [ div [ class "photo" ] [ img [ src "images/001.jpg" ] [] ]
                , div [ class "photo" ] [ img [ src "images/003.jpg" ] [] ]
                , div [ class "photo" ] [ img [ src "images/008.jpg" ] [] ]
                , div [ class "photo" ] [ img [ src "images/005.jpg" ] [] ]
                , div [ class "photo" ] [ img [ src "images/002.jpg" ] [] ]
                , div [ class "photo" ] [ img [ src "images/006.jpg" ] [] ]
                , div [ class "photo" ] [ img [ src "images/007.jpg" ] [] ]
                , div [ class "photo" ] [ img [ src "images/010.jpg" ] [] ]
                , div [ class "photo" ] [ img [ src "images/009.jpg" ] [] ]
                , div [ class "photo" ] [ img [ src "images/003.jpg" ] [] ]
                ]
            , div [ class "imgColumns" ]
                [ div [ class "photo" ] [ img [ src "images/004.jpg" ] [] ]
                , div [ class "photo" ] [ img [ src "images/001.jpg" ] [] ]
                , div [ class "photo" ] [ img [ src "images/007.jpg" ] [] ]
                , div [ class "photo" ] [ img [ src "images/010.jpg" ] [] ]
                , div [ class "photo" ] [ img [ src "images/006.jpg" ] [] ]
                , div [ class "photo" ] [ img [ src "images/007.jpg" ] [] ]
                , div [ class "photo" ] [ img [ src "images/002.jpg" ] [] ]
                , div [ class "photo" ] [ img [ src "images/005.jpg" ] [] ]
                , div [ class "photo" ] [ img [ src "images/007.jpg" ] [] ]
                , div [ class "photo" ] [ img [ src "images/002.jpg" ] [] ]
                ]
            , div [ class "imgColumns" ]
                [ div [ class "photo" ] [ img [ src "images/007.jpg" ] [] ]
                , div [ class "photo" ] [ img [ src "images/005.jpg" ] [] ]
                , div [ class "photo" ] [ img [ src "images/008.jpg" ] [] ]
                , div [ class "photo" ] [ img [ src "images/009.jpg" ] [] ]
                , div [ class "photo" ] [ img [ src "images/004.jpg" ] [] ]
                , div [ class "photo" ] [ img [ src "images/003.jpg" ] [] ]
                , div [ class "photo" ] [ img [ src "images/006.jpg" ] [] ]
                , div [ class "photo" ] [ img [ src "images/001.jpg" ] [] ]
                , div [ class "photo" ] [ img [ src "images/010.jpg" ] [] ]
                ]
            ]
        ]



-- I need to make this but in elm
-- if ($(window).width() < 400 ) {
-- $("input[type='email']").attr("placeholder","join our newsletter");
-- }
-- else { $("input[type='email']").attr("placeholder","your email");}
