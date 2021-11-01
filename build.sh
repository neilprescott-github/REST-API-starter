#!/bin/bash

#exit on any error
set -e

handleError() {
	msg=$1
	rc=$2
	echo "ERROR detected - message: '${msg}' code is {$ra}"
	exit $rc
}

echo "What version would you like the image to be?"
read version

dir=~/projects/REST-API-starter/
image="restapp-neil-iamge"

cd $dir || handleError "change directory failed" ${PIPESTATUS[0]}

npm install || handleError "NPM install failed" ${PIPESTATUS[0]}

#npm run build ${dir} || handleError "NPM Build failed" ${PIPESTATUS[0]}


#-Build Docker image of your application.
docker build -t ${image}:${version} ${dir} || handleError "Docker Build failed" ${PIPESTATUS[0]}

#-Modify your application.
echo 'Adding in something new' > ${dir}/newfile.txt || handleError "echo or file create failed" ${PIPESTATUS[0]}

#-Generate new Docker image of an application.
docker build -t ${image}:${version} ${dir} || handleError "Docker Build failed" ${PIPESTATUS[0]}
