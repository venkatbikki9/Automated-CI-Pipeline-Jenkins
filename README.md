
# Automated CI Pipeline for a Web Application using Jenkins

## Project Overview
This project demonstrates how to design and implement a **Continuous Integration (CI) pipeline** using **Jenkins** for a modern web application.  
The pipeline automatically triggers whenever new code is pushed to a GitHub repository. It performs automated steps such as:

- Code retrieval  
- Dependency installation  
- Unit testing  
- Build and artifact packaging  

The goal is to ensure that the application is always in a **ready-to-deploy** state, following key DevOps principles of **automation**, **reliability**, and **repeatability**.


##  Pipeline Workflow

### **1. Code Checkout**
- Jenkins connects to the GitHub repository.
- Automatically triggers on new commits or pull requests.
- Retrieves the latest code from the main branch.

### **2. Dependency Installation**
- Installs all required project dependencies:
  - Node.js → `npm install`
  - Python → `pip install -r requirements.txt`
  - Java → `mvn clean install`
- Ensures the build environment matches developer setups.

### **3. Static Code Analysis** *(optional enhancement)*
- Tools like **ESLint**, **Flake8**, or **Checkstyle** can analyze code quality.
- Jenkins can fail the build if coding standards are not met.

### **4. Unit Testing**
- Executes the project’s test suite to ensure core features work correctly.
- Jenkins displays detailed test reports.
- Build fails automatically if tests fail.

### **5. Build & Package**
- Compiles or packages the application:
  - Node.js → bundles app into `/build`
  - Python → creates `.tar.gz`
  - Java → produces `.jar` or `.war` using Maven
- Jenkins archives the final build artifact.

### **6. Post-Build Actions**
- Jenkins stores build artifacts and test results.
- Sends success/failure notifications (email or Slack).
- Provides quick feedback loops for developers.

---

##  Tech Stack

- **Language / Framework:** Node.js / Python Flask / Java Spring Boot  
- **CI Server:** Jenkins  
- **Version Control:** GitHub  
- **Testing Framework:** Jest / Pytest / JUnit  
- **Build Tools:** npm / Maven / Gradle  
- **Automation:** Jenkins Pipelines (Declarative syntax)

---

##  Setup Instructions

### **1. Install Jenkins**
```bash
sudo apt update
sudo apt install openjdk-17-jdk -y
wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -
sudo sh -c 'echo deb https://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt update
sudo apt install jenkins -y
sudo systemctl enable jenkins
sudo systemctl start jenkins


