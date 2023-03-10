FROM nginx:alpine
COPY ./shadowmere-njs/shadowmere-njs/out /usr/share/nginx/html
