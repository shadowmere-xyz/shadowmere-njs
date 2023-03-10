FROM nginx:alpine
COPY ./shadowmere-njs/out /usr/share/nginx/html
