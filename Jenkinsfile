pipeline {
    agent any

    stages {
        stage('Configuração'){
            steps {
                git branch: 'main', url: 'https://github.com/claudio-bs/testes-api-cy.git'
                sh 'npm install'
            }
        }
        stage('Execução dos testes'){
            steps {
                sh 'NO_COLOR=1 npm run cy:run-ci'
            }   
        }
    }
}