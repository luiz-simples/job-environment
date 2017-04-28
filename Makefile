.PHONY: run in stop clean build psql build-dev build-base build-database
# DT = $(shell date +%Y_%m_%d_%H_%M_%S)
# BKP = personal_${DT}.bkp

run: clean
	docker-compose run --rm -p 9595:9595 -p 9090:9090 dev

in:
	docker exec -i -t $(shell docker-compose ps | grep run | cut -d" " -f 1) /bin/bash

stop:
	docker-compose stop

clean:
	docker-compose down
	docker volume ls -qf dangling=true | xargs -r docker volume rm

psql:
	docker exec -it job-db psql -h localhost -U postgres -d job

build-dev:
	sh ./docker/dockerfile-ids.sh
	docker-compose build dev

build-base:
	docker build -t job/es6:base -f ./docker/DockerfileBase ./docker
	# docker push job/es6:base

build-database:
	docker build -t job/pg:9.5 -f ./docker/DockerfileDB ./docker
	# docker push job/pg:9.5
