# Visitor App
Simple Node Js app that displays the number of visitors. The visitors value is stored in a redis database

## Instructions to run the app in docker

Create a docker network
```
/> docker create network visitor-network
```

Run a redis container in a terminal attached to the network
```
/> docker run -it -p 6379:6379 --name my-redis-server --network visitor-network redis
```

To build the visitor app image, open a new terminal in the code directory
```
/visitorapp> docker build -t visitorapp .
```

To start a container
```
/visitorapp> docker run -it -p 9999:9999 --network visitor-network visitorapp
```


## Instructions to run the app in using docker-compose

To start all containers
```
/visitorapp> docker-compose up --build
```

To stop all containers
```
/visitorapp> docker-compose down
```
