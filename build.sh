#!/bin/bash

handleError() {
	msg=$1
	rc=$2
	echo "ERROR detected - message: '${msg}' code i{$ra}c"
	exit $rc
}
npm build ~/exercises/REST-API-starter/ || handleError "NPM Build failed" $?


#-Build Docker image of your application.
docker build -t restapp-neil-iamge:v1 ~/exercises/REST-API-starter/ || handleError "Docker Build failed" $?

#-Modify your application.
echo 'Adding in something new' > ~/exercises/REST-API-starter/newfile.txt || handleError "echo/file create failed" $?

#-Generate new Docker image of an application.
docker build -t restapp-neil-image:v2 ~/exercises/REST-API-starter/ || handleError "Docker Build failed" $?
