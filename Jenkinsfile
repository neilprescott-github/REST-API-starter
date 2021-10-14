pipeline{
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
            }           }
            stage('Build docker image'){
                steps{
                    sh "docker build -t restapp-neil-image:v2 ."
                }
            }
        }
}
