/*pipeline {
    agent any

    environment {
        DOCKER_USER = "nisham1234"
        DOCKER_PASS = credentials('dockerhub-password')
    }

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main', url: 'https://github.com/mhdnisham/e-zone.git'
            }
        }

   /* stage('Build Docker Images') {
    steps {
        sh 'docker build -t nisham1234/e-zone:backend ./backend'
        sh 'docker build -t nisham1234/e-zone:frontend .'
    }
}
    
      stage('Build Docker Images') {
    steps {
        sh 'docker build -t backendimage ./backend'
        sh 'docker build -t frontendimage .'
    }
}

      stage('change image name')
    steps {

       sh 'docker tag backendimage nisham1234/e-zone:latest' 
       sh 'docker tag frontendimage nisham1234/e-zone:latest'

    }    

       stage('Docker Login') {
    steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-password', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
            sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
        }
    }
}    

       /* stage('Push Images') {
            steps {
                sh 'docker push $DOCKER_USER/e-zone-backend'
                sh 'docker push $DOCKER_USER/e-zone-frontend'
            }
        }


           stage('Push Images') {
            steps {
                sh 'docker push $DOCKER_USER/nisham1234/e-zone:latest'
                sh 'docker push $DOCKER_USER/nisham1234/e-zone:latest'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker-compose down'
                sh 'docker-compose pull'
                sh 'docker-compose up -d'
            }
        }
    }
}*/

pipeline {
    agent any

    environment {
        DOCKER_USER = "nisham1234"
    }

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main', url: 'https://github.com/mhdnisham/e-zone.git'
            }
        }

/*        stage('Build Docker Images') {
            steps {
                sh 'docker build -t backendimage ./backend'
                sh 'docker build -t frontendimage .'
            }
        }

        stage('Tag Images') {
            steps {
                sh 'docker tag backendimage nisham1234/e-zone:backend'
                sh 'docker tag frontendimage nisham1234/e-zone:frontend'
            }
        }*/

         stage('Build Docker Images') {
            steps {
                sh 'docker build -t backendimage:${BUILD_NUMBER} ./backend'
                sh 'docker build -t frontendimage:${BUILD_NUMBER} .'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-password', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                }
            }
        }

        stage('Push Images') {
            steps {
                sh 'docker push nisham1234/e-zone-backendimage:${BUILD_NUMBER}'
                sh 'docker push nisham1234/e-zone-frontendimage:${BUILD_NUMBER}'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker-compose down'
                /*sh 'docker-compose pull'*/
                sh 'docker-compose up -d'
            }
        }
    }
}   