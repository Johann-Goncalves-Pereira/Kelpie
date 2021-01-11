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
        [ headerPage model
        , imgDisplay model

        {- button [ onClick GoToPage2 ] [ text "Go to page 2!" ] -}
        ]


headerPage : Model -> Html Msg
headerPage model =
    header [ class "header" ]
        [ div [ class "logoHeader" ]
            [ img
                [ src "*/logo.png"
                , alt "KELPIE"
                ]
                [ a [ href "http://localhost:8080/" ] [] ]
            ]
        , div [ class "serach" ]
            [ input []
                [ Svg.svg
                    [ SvgAttributes.version "1.1"
                    , SvgAttributes.id "Capa_1"
                    , SvgAttributes.x "0px"
                    , SvgAttributes.y "0px"
                    , SvgAttributes.viewBox "0 0 56.966 56.966"
                    , SvgAttributes.style "enable-background:new 0 0 56.966 56.966;"
                    , SvgAttributes.xmlSpace "preserve"
                    ]
                    [ Svg.path [ SvgAttributes.d "M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23\n\ts10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92\n\tc0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17\n\ts-17-7.626-17-17S14.61,6,23.984,6z" ] [] ]
                ]
            , input [ placeholder "Search free high-resolution photos" ] []
            , input []
                [ Svg.svg
                    [ SvgAttributes.id "Capa_1"
                    , SvgAttributes.enableBackground "new 0 0 512 512"
                    , SvgAttributes.height "512"
                    , SvgAttributes.width "512"
                    , SvgAttributes.viewBox "0 0 512 512"
                    ]
                    [ Svg.g []
                        [ Svg.path [ SvgAttributes.d "m456.66 0h-71.66c-8.284 0-15 6.716-15 15s6.716 15 15 15h71.66c13.972 0 25.34 11.368 25.34 25.341v71.659c0 8.284 6.716 15 15 15s15-6.716 15-15v-71.659c0-30.515-24.826-55.341-55.34-55.341z" ] []
                        , Svg.path [ SvgAttributes.d "m15 142c8.284 0 15-6.716 15-15v-71.659c0-13.973 11.368-25.341 25.34-25.341h71.66c8.284 0 15-6.716 15-15s-6.716-15-15-15h-71.66c-30.514 0-55.34 24.826-55.34 55.341v71.659c0 8.284 6.716 15 15 15z" ] []
                        , Svg.path [ SvgAttributes.d "m127 482h-71.66c-13.972 0-25.34-11.368-25.34-25.341v-71.659c0-8.284-6.716-15-15-15s-15 6.716-15 15v71.659c0 30.515 24.826 55.341 55.34 55.341h71.66c8.284 0 15-6.716 15-15s-6.716-15-15-15z" ] []
                        , Svg.path [ SvgAttributes.d "m497 370c-8.284 0-15 6.716-15 15v71.659c0 13.973-11.368 25.341-25.34 25.341h-71.66c-8.284 0-15 6.716-15 15s6.716 15 15 15h71.66c30.515 0 55.34-24.826 55.34-55.341v-71.659c0-8.284-6.716-15-15-15z" ] []
                        , Svg.path [ SvgAttributes.d "m341.643 110h47.575c6.497 0 11.782 5.285 11.782 11.782v47.574c0 8.284 6.716 15 15 15s15-6.716 15-15v-47.574c0-23.039-18.744-41.782-41.782-41.782h-47.575c-8.284 0-15 6.716-15 15s6.716 15 15 15z" ] []
                        , Svg.path [ SvgAttributes.d "m81 121.782v47.574c0 8.284 6.716 15 15 15s15-6.716 15-15v-47.574c0-6.497 5.286-11.782 11.782-11.782h47.575c8.284 0 15-6.716 15-15s-6.716-15-15-15h-47.575c-23.038 0-41.782 18.743-41.782 41.782z" ] []
                        , Svg.path [ SvgAttributes.d "m170.357 400h-47.575c-6.497 0-11.782-5.285-11.782-11.782v-47.574c0-8.284-6.716-15-15-15s-15 6.716-15 15v47.574c0 23.039 18.744 41.782 41.782 41.782h47.575c8.284 0 15-6.716 15-15s-6.716-15-15-15z" ] []
                        , Svg.path [ SvgAttributes.d "m431 388.218v-47.574c0-8.284-6.716-15-15-15s-15 6.716-15 15v47.574c0 6.497-5.286 11.782-11.782 11.782h-47.575c-8.284 0-15 6.716-15 15s6.716 15 15 15h47.575c23.038 0 41.782-18.743 41.782-41.782z" ] []
                        , Svg.path [ SvgAttributes.d "m1 256c0 8.284 6.716 15 15 15h480c8.284 0 15-6.716 15-15s-6.716-15-15-15h-480c-8.284 0-15 6.716-15 15z" ] []
                        ]
                    ]
                ]
            ]
        , div [ class "centerHeader" ]
            [ a [ href "*brands" ] [ text "Brands" ]
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



-- tagsDisplay
