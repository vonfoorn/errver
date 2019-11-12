image = quay.io/vonfoorn/errver

build:
	docker build -t ${image} .

push: build
	docker push ${image}

start: build
	docker run -p 3000:3000 -d --rm --name errver ${image}

logs:
	docker logs -f errver

stop:
	docker stop errver

restart: stop start
