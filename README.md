Rice Cooker Simulator Refactoring
=================

In this project, the provided JavaScript code has undergone a refactoring process to replace if-else statements with switch-case. Below are the key changes made during the refactoring process:


Refactoring Details
-----------------

#### 1. addRice Method
Replaced if (!this.ricePresent) with switch (true) and a case for !this.ricePresent.
#### 2. cookRice Method
Replaced complex if-else conditions with a switch-case structure for improved readability.
#### 3. steam Method
Utilized switch-case to handle different conditions more efficiently.
#### 4. keepWarm Method
Replaced nested if-else statements with a switch-case structure for clarity.
#### 5. removeRice Method
Simplified the removal logic using a switch-case structure.
