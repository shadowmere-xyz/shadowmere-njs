FROM node:19 as build

ADD . /app
WORKDIR /app

RUN npm install
RUN npm run build
RUN npm run export

FROM nginx:alpine
COPY --from=build /app/out /usr/share/nginx/html