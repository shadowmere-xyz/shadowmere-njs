FROM cgr.dev/chainguard/nginx:latest
ADD ./out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
