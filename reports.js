const { Project, Employee, ProjectAssignment } = require("./associations");

async function getEmployeesNotPartOfAnyProject(sequelize) {
  try {
    const employeesNotPartOfAnyProject = await Employee.findAll({
      where: {
        "$ProjectAssignments.employee_id$": null,
      },
      include: [
        {
          model: ProjectAssignment,
          as: "ProjectAssignments",
          required: false,
          attributes: [],
        },
      ],
      attributes: ["employee_id", "name"],
      raw: true,
      sequelize,
    });

    console.log("List of employees who are not part of any project:");
    employeesNotPartOfAnyProject.forEach((employee) => {
      console.log(`${employee.employee_id} | ${employee.name}`);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getAllProjectsWithEmployees(sequelize) {
  try {
    const projectsWithEmployees = await Project.findAll({
      include: [
        {
          model: Employee,
          through: ProjectAssignment,
        },
      ],
      sequelize,
    });

    console.log("List of projects along with their assigned employees:");
    projectsWithEmployees.forEach((project) => {
      console.log(`${project.name_of_the_project}:`);
      project.Employees.forEach((employee) => {
        console.log(`${employee.name} (Employee ID: ${employee.employee_id})`);
      });
      console.log("---------------------");
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getProjectDetailsOfEmployee(employeeId, sequelize) {
  try {
    const employee = await Employee.findByPk(employeeId, {
      include: [
        {
          model: Project,
          through: ProjectAssignment,
        },
      ],
      sequelize,
    });

    if (employee) {
      console.log(`Project details of Employee ID ${employeeId}:`);
      employee.Projects.forEach((project) => {
        console.log(
          `${project.name_of_the_project} (Project ID: ${project.project_id})`
        );
      });
    } else {
      console.log(`Employee with ID ${employeeId} not found.`);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getTotalContributionPercentage(employeeId, sequelize) {
  try {
    const employee = await Employee.findByPk(employeeId, {
      include: [
        {
          model: ProjectAssignment,
        },
      ],
      sequelize,
    });

    if (employee) {
      let totalContribution = 0;
      employee.ProjectAssignments.forEach((assignment) => {
        totalContribution += assignment.contribution_percentage;
      });

      console.log(
        `Total contribution percentage of Employee ID ${employeeId}: ${totalContribution}%`
      );
    } else {
      console.log(`Employee with ID ${employeeId} not found.`);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getEmployeesNotPartOfAnyProject();
getAllProjectsWithEmployees();
getProjectDetailsOfEmployee("EMP001");
getTotalContributionPercentage("EMP001");
