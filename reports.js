const { Project, Employee, ProjectAssignment } = require("./associations");

async function getEmployeesNotPartOfAnyProject() {
  try {
    const employeesNotPartOfAnyProject = await Employee.findAll({
      where: {
        "$ProjectAssignments.EmployeeEmployeeId$": null,
      },
      include: {
        model: ProjectAssignment,
        as: "ProjectAssignments",
        required: false,
        attributes: [],
      },
      attributes: ["employee_id", "name"],
      raw: true,
    });

    console.log("List of employees who are not part of any project:");
    employeesNotPartOfAnyProject.forEach((employee) => {
      console.log(`${employee.employee_id} | ${employee.name}`);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getAllProjectsAndTeamMembers() {
  try {
    const projectsWithTeamMembers = await Project.findAll({
      include: [
        {
          model: Employee,
          through: ProjectAssignment,
          attributes: ["employee_id", "name"],
        },
        {
          model: ProjectAssignment,
          attributes: ["assignment_id", "contribution_percentage", "role_name"],
        },
      ],
    });

    console.log(
      "List of all projects along with team members, role information, and % of contribution:"
    );
    projectsWithTeamMembers.forEach((project) => {
      console.log(
        `${project.name_of_the_project} (Project ID: ${project.project_id}):`
      );
      project.Employees.forEach((employee) => {
        console.log(
          `  ${employee.name} (Employee ID: ${employee.ProjectAssignment.employee_id})`
        );
        const assignment = project.ProjectAssignments.find(
          (assignment) =>
            assignment.assignment_id ===
            employee.ProjectAssignment.assignment_id
        );
        console.log(
          `     Role: ${assignment.role_name}, Contribution: ${assignment.contribution_percentage}%`
        );
      });
      console.log("-------------------------------------------------------");
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getUnderutilizedEmployees() {
  try {
    const underutilizedEmployees = await Employee.findAll({
      include: {
        model: ProjectAssignment,
        attributes: ["contribution_percentage"],
        include: {
          model: Project,
        },
      },
    });

    console.log("List of employees who are underutilized:");
    underutilizedEmployees.forEach((employee) => {
      let totalContribution = 0;
      employee.ProjectAssignments.forEach((assignment) => {
        totalContribution += assignment.contribution_percentage;
      });

      if (totalContribution < 100 && totalContribution > 0) {
        console.log(
          `${employee.name} (Employee ID: ${employee.employee_id}) - Total Contribution: ${totalContribution}%`
        );
      }
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

module.exports = {
  getEmployeesNotPartOfAnyProject,
  getAllProjectsAndTeamMembers,
  getUnderutilizedEmployees,
};
