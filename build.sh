#!/bin/bash

#exit on any error
set -e

handleError() {
	msg=$1
	rc=$2
	echo "ERROR detected - message: '${msg}' code i{$ra}c"
	exit $rc
}

echo "What version would you like the image to be?"
read version

dir=~/exercises/REST-API-starter/
image="restapp-neil-iamge"

cd $dir || handleError "change directory failed" $?

npm install || handleError "NPM install failed" $?

npm build ${dir} || handleError "NPM Build failed" $?


#-Build Docker image of your application.
docker build -t ${image}:${version} ${dir} || handleError "Docker Build failed" $?

#-Modify your application.
echo 'Adding in something new' > ${dir}/newfile.txt || handleError "echo or file create failed" $?

#-Generate new Docker image of an application.
docker build -t ${image}:${version} ${dir} || handleError "Docker Build failed" $?
