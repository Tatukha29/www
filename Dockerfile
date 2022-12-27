FROM nginx:1.23.2

WORKDIR /var/www/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY . .

CMD ["nginx", "-g", "daemon off;"]
