module Pages.One exposing (..)

import Html exposing (Html, a, button, div, footer, form, h2, h3, h4, header, img, input, li, main_, nav, p, span, strong, text, ul)
import Html.Attributes exposing (alt, class, href, id, placeholder, src, type_)
import Html.Events exposing (onClick)
import Pages.SubmitPhotos as SubmitPhotos
import Route
import Shared



-----------
-- Model --
-----------


type alias Model =
    { userSharedStatus : Bool
    , submitPhotos : Maybe SubmitPhotos.Model

    --
    }


init : Model
init =
    { userSharedStatus = False
    , submitPhotos = Nothing
    }



---------
-- Msg --
---------


type Msg
    = SubmitPhotosMsg SubmitPhotos.Msg
    | GoToLogin



------------
-- Update --
------------


update : Msg -> Model -> Shared.Model -> ( Model, Cmd Msg, Shared.Msg )
update msg model shared =
    case msg of
        SubmitPhotosMsg modalPhotoMsg ->
            case model.submitPhotos of
                Just submitPhotos ->
                    let
                        ( newSubmitPhotoModel, submitPhotoCmd ) =
                            SubmitPhotos.update modalPhotoMsg submitPhotos
                    in
                    ( { model | submitPhotos = Just newSubmitPhotoModel }
                    , Cmd.map SubmitPhotosMsg submitPhotoCmd
                    , Shared.NoOp
                    )

                Nothing ->
                    ( model, Cmd.none, Shared.NoOp )

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
        , div [ class "tags" ]
            [ h3 [] [ text "Tags" ]
            , div [ class "separator" ] []
            , div [ class " tagsStyle" ]
                [ ul []
                    [ li [] [ a [ href "*/t/Wallpaper" ] [ text "Wallpaper" ] ]
                    , li [] [ a [ href "*/t/People" ] [ text "People" ] ]
                    , li [] [ a [ href "*/t/Film" ] [ text "Film" ] ]
                    , li [] [ a [ href "*/t/Movie" ] [ text "Movie" ] ]
                    , li [] [ a [ href "*/t/Nature" ] [ text "Nature" ] ]
                    , li [] [ a [ href "*/t/Dance" ] [ text "Dance" ] ]
                    , li [] [ a [ href "*/t/Happy" ] [ text "Happy" ] ]
                    , li [] [ a [ href "*/t/Food" ] [ text "Food" ] ]
                    , li [] [ a [ href "*/t/Romance" ] [ text "Romance" ] ]
                    , li [] [ a [ href "*/t/History" ] [ text "History" ] ]
                    , li [] [ a [ href "*/t/Culture" ] [ text "Culture" ] ]
                    , li [] [ a [ href "*/t/Animals" ] [ text "Animals" ] ]
                    , li [] [ a [ href "*/t/LGBTQ" ] [ text "LGBTQ+" ] ]
                    , li [] [ a [ href "*/t/Family" ] [ text "Family" ] ]
                    , li [] [ a [ href "*/t/Meme" ] [ text "Meme" ] ]
                    , li [] [ a [ href "*/t/Country" ] [ text "Country" ] ]
                    , li [] [ a [ href "*/t/Offices" ] [ text "Offices" ] ]
                    , li [] [ a [ href "*/t/Materialize" ] [ text "Materialize" ] ]
                    , li [] [ a [ href "*/t/Art" ] [ text "Art" ] ]
                    , li [] [ a [ href "*/t/Draw" ] [ text "Draw" ] ]
                    , li [] [ a [ href "*/t/text" ] [ text "Farm" ] ]
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
    main_ [ class "imgContainer" ]
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
