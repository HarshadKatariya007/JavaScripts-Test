const employeeData = (e) =>
{
    e.preventDefault();

    let Employee_Name = document.getElementById("employee-name").value;
    let Employee_Job = document.getElementById("job-1").value;
    let Employee_Department = document.getElementById("job-2").value;
    let Employee_Salary = document.getElementById("salary").value;
    let Employee_Experience = document.getElementById("experience").value;
    let Employee_Email = document.getElementById("email").value;

    let Employee_table = document.createElement("tr");
    let Employee_table_name = document.createElement("td");

    Employee_table_name.innerHTML = Employee_Name;

    let Employee_table_Job = document.createElement("td");

    Employee_table_Job.innerHTML = Employee_Job;

    Employee_table.append(Employee_table_name);

    let Employee_table_Department = document.createElement("td");

    Employee_table_Department.innerHTML = Employee_Department;

    let Employee_table_Salary = document.createElement("td");

    Employee_table_Salary.innerHTML = Employee_Salary;

    let Employee_table_email = document.createElement("td");

    Employee_table_email.innerHTML = Employee_Email;

    let Employee_table_Work = document.createElement("td");

    Employee_table_Work.innerHTML = Employee_Experience;

    let Employee_table_Role = document.createElement("td");
    if(Employee_Experience <=5)
    {
        Employee_table_Role.innerHTML="Junior";
    }
    else
    {
        Employee_table_Role.innerHTML="Senior";
    }

    let Employee_table_delete = document.createElement("td");

    Employee_table_delete.innerHTML ="Delete";
    Employee_table_delete.style.backgroundColor="red";
    Employee_table_delete.style.textAlign="center";
    Employee_table_delete.addEventListener("click",(e)=>
    {
        e.target.parentNode.remove();
    })

    Employee_table.append(Employee_table_name,Employee_table_Job,Employee_table_Department,Employee_table_Salary,Employee_table_email,
                          Employee_table_Work,Employee_table_Role,Employee_table_delete);
    document.getElementById("data").append(Employee_table);
}




document.getElementById("employeeData-1").addEventListener("submit",employeeData);