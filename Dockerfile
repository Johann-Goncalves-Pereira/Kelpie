FROM registry.ingress.materialize.pro/cloudops/elm-builder:28d656626c84ebce2e1a15e24c325f6d58e32523 as build
WORKDIR /app
COPY . .
RUN npm install && npm rebuild node-sass
RUN make prod

FROM nginx:alpine

COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/public/ /usr/share/nginx/html/

