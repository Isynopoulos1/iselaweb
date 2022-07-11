# Stage 1 - Build
FROM node:16.13.1-alpine as react-build

WORKDIR /app
COPY package.json .
COPY .env.local .

# GET VARIABLES
RUN npm install --no-audit 

# COPY ALL
COPY . .

# BUILD
RUN npm run build

# Stage 2 - the production environment
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
