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
                sh 'NO_COLOR=1 npm run cy:run-ci | true'
                sh 'npm run cy:report'
            }   
        }
        stage('Relatório'){
            steps {
               publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'mochawesome-report', reportFiles: 'report.html', reportName: 'Testes EBAC Cypress', reportTitles: '', useWrapperFileDirectly: true]) 
            }
        } 
    }
}