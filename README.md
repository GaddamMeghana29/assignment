# CSV Data Import and Reporting

This repository contains project focusing on importing data from CSV files into a database using the Sequelize ORM. The project involves creating, configuring, and associating Sequelize models representing employees, project assignments, and projects. The script reads data from CSV files and inserts it into the database. It also performs queries to generate various reports based on the imported data.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)


## Installation

To use this project, follow these steps:
1. Make sure Node.js installed on your machine. If not, download and install it using https://nodejs.org/en/download
2. Clone the repository: `git clone https://github.com/GaddamMeghana29/assignment-on-rdbms`
3. Install Sequelize using npm: `npm install --save sequelize`
4. Install the database driver: `npm install --save pg pg-hstore`. 
For other databases we can use
 * `npm install --save mysql2 ` # Mysql <br>
 * `npm install --save mariadb `# MariaDB<br>
 * `npm install --save sqlite3` # Sqlite<br>
 * `npm install --save tedious` # Tedious<br>

5. Install the required dependencies using npm: `npm install`.
6. Install the ncnf using `npm install nconf`.
7. Run the following command to install commander: `npm install commander`.


## Usage

To use this assignment and perform data import from CSV files into the database, please follow the steps below :
1. Please set up and configure database (e.g., MySQL, PostgreSQL, SQLite) where the data need to imported.
2. Ensure  that  DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, and DB_DIALECT has been set according to database configuration.
3. Now we can import the data from CSV and generate reports based on the imported data using the following commands:
    *  To display list of options: `node app.js -h`. The options will be displayed in the console and we need to run the script using them.
    *  To insert the data from the CSV files: `node app.js -d`. This is the first step that need to be done to execute the remaining steps.
    *  To get a list of employees who are not part of any project: `node app.js -e`
    *  To get project details along with team members: `node app.js -p` 
    *  To get a list of underutilised employees: `node app.js -u`


## Contributing

If you would like to contribute to this project, please fork the repository and create a pull request with the changes.


