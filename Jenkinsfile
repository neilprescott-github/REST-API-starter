ipipeline{
        agent any
        stages{
            stage('Install npm'){
                steps{
                    sh "npm install"
                }
            }
            stage('Test'){
                steps{
                    sh "npm test"
                }
            }
            stage('Build node app'){
                steps{
                    sh "npm build ."
                }
            }
            stage('Build docker image'){
                steps{
                    sh "docker build . -t gcr.io/training-325404/gcp-restapp-neil-image:v1"
                }
            }
            stage('Push docker image'){
                steps{
                    sh "docker push gcr.io/training-325404/gcp-restapp-neil-image:v1"
                }
            }
        }
}
