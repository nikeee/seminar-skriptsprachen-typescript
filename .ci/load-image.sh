#!/usr/bin/env bash

IMAGE_NAME="sumdoc/texlive-2018"
IMAGE_CACHE_FILE="docker/texlive-2018.tar.gz"

if [[ -f "${IMAGE_CACHE_FILE}" ]]; then
	# There is a cached image. unzip and load it
	echo "Found ${IMAGE_CACHE_FILE}, loading..."
	gzip -dc "${IMAGE_CACHE_FILE}" | docker load
	echo "Cache loaded!"
else
	# If cache is not present, load pull image and save it
	echo "Found ${IMAGE_CACHE_FILE} not found, pulling..."
	docker pull "${IMAGE_NAME}"
	echo "Loaded!"

	echo "Saving image..."
	docker save "${IMAGE_NAME}" | gzip > "${IMAGE_CACHE_FILE}"
	echo "Image saved!"
fi
