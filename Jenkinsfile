pipeline{
        agent any
        stages{
            stage('Test'){
                steps{
                    sh "npm test"
                }
            }
            stage('Build'){
                steps{
                    sh "npm build ."
                }
            }
        }
}