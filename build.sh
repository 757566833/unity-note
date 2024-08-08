#!/bin/bash


# 指定脚本接收一个参数
program=$1


echo "The argument program is: $program"


PACKAGE_JSON_FILE="package.json"

VERSION=$(grep -Po '"version": "\K[^"]+' "$PACKAGE_JSON_FILE")

# # 输出版本号
echo "The version of the project is: $VERSION"

CURRENT_TIME=$(date -u +"%Y-%m-%dT%H-%M-%SZ")

echo "time is: $CURRENT_TIME"

mkdir docker.log 
docker build -t s3-engine:${VERSION}_${CURRENT_TIME}  . > docker.log/s3-engine.build.log 2>&1

 docker tag s3-engine:${VERSION}_${CURRENT_TIME} harbor.nd.tevat.dev/z-web/s3-engine:${VERSION}_${CURRENT_TIME}
echo "docker push harbor.nd.tevat.dev/z-web/s3-engine:${VERSION}_${CURRENT_TIME}"

# docker push harbor.nd.tevat.dev/z-web/${program}:${VERSION}_${CURRENT_TIME}



