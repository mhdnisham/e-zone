pipeline {
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

        stage('Build Docker Images') {
            steps {
                sh 'docker build -t $DOCKER_USER/e-zone-backend ./backend'
                sh 'docker build -t $DOCKER_USER/e-zone-frontend ./frontend'
            }
        }

        stage('Docker Login') {
            steps {
                sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
            }
        }

        stage('Push Images') {
            steps {
                sh 'docker push $DOCKER_USER/e-zone-backend'
                sh 'docker push $DOCKER_USER/e-zone-frontend'
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
}