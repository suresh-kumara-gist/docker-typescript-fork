set -e
docker pull node:alpine
docker build -t local-dcycle-typescript-image .

docker run --rm \
  -v "$(pwd)"/example01:/code local-dcycle-typescript-image

echo "First test (example01) passed."
echo "Now we will test example02 which contains errors to make"
echo "sure we catch them."

! docker run --rm \
  -v "$(pwd)"/example02:/code local-dcycle-typescript-image

echo "Test with errors (example02) passed."
echo "All good!"
