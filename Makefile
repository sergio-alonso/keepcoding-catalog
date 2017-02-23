NAME=prototype
TAG=educational-heritage/prototype

all: build run shell

build:
	@docker build --tag=$(TAG) .

run:
	@docker run --name $(NAME) -itd -p 3000:9000 $(TAG)

shell:
	@docker exec -it $(NAME) /bin/bash

clean:
	@docker stop $(NAME)
	@docker rm $(NAME)
	@rm -fr $(NAME).tar

deploy:
	@docker save -o $(NAME).tar $(TAG)
	@rsync -avh $(NAME).tar xana:~/
	@ssh xana docker stop $(NAME)
	@ssh xana docker rm $(NAME)
	@ssh xana docker load -i $(NAME).tar
	@ssh xana docker run --name $(NAME) --restart=always -d -e "VIRTUAL_HOST=prototype.legadoeducativo.org" -t -p 3000:9000 $(TAG)

ip:
	@docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' ${NAME}
