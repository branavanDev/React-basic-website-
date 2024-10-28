pipeline {
    agent any
    tools {
        nodejs "NodeJS" // Ensure NodeJS is configured in Jenkins global tools
    }
    stages {
        stage('Checkout') {
            steps {
                 git branch: 'main',
                        url: 'https://github.com/branavanDev/react-basic-website-.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build' // Adjust according to your build command
            }
        }

        stage('Test') {
            steps {
                bat 'npm test' // This should run your tests using your configured test framework (e.g., Jest)
            }
        }
        
    }
    post {
        always {
            junit '**/test-results/*.xml' // Adjust path as necessary to gather test results
        }
        success {
            echo 'Tests passed successfully!'
        }
        failure {
            echo 'Tests failed. Check the logs for details.'
        }
    }
}