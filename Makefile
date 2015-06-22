PROJECT ?= quay.io/flippa/flippa-node
TAG     ?= latest
IMAGE    = $(PROJECT):$(TAG)

.PHONY: build shell test

build: Dockerfile
	docker build --rm -t $(IMAGE) .

shell:
	docker run --rm -it -v $(PWD):/src $(IMAGE) bash

test:
	docker run --rm -t $(IMAGE) npm run test

publish: build
	docker run --rm -it $(IMAGE) npm login && npm publish --unsafe-perm
	git tag $(TAG)
	git push --tags
