# Clock-BACKEND

# RUN locally
## build project:
npm run build

## start server
npm dist/index.js

## other method to run this commands at the same time launching an script
bash run.sh


# DOCKER
## build the Docker image
docker build . -t myapp/clock-bk

## run the Docker build
##The -d runs the container in background
##The -p flag redirects a public port to a private port inside the container.

docker run -p 49160:3000 -d myapp/clock-bk

## Enter the container
docker exec -it <container id> /bin/bash
