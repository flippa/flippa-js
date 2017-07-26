REGISTRY ?= 578700794486.dkr.ecr.us-east-1.amazonaws.com
PROJECT ?= flippa-js
TAG ?= dev

IMAGE ?= "$(REGISTRY)/$(PROJECT):$(TAG)"

.PHONY: build shell test publish tag

build: Dockerfile
	docker build --rm -t $(IMAGE) .

shell:
	docker run --rm -it -v $(PWD):/src $(IMAGE) sh

test:
	docker run --rm -t $(IMAGE) npm run test

publish: build
	docker run --rm -it $(IMAGE) ./scripts/publish.sh

tag:
	git tag $(TAG)
	git push --tags
