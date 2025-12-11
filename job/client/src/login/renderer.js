let role = 'employee'



function selectRole(newRole) {
    role = newRole;

    const employeeBtn = document.getElementById("btn_employee");
    const employerBtn = document.getElementById("btn_employer");
    const adminBtn = document.getElementById("btn_admin");

    // Remove active class from both
    employeeBtn.classList.remove("active-role");
    employerBtn.classList.remove("active-role");
    adminBtn.classList.remove("active-role");

    // Add active class to the selected button
    if (newRole === "employee") {
        employeeBtn.classList.add("active-role");
    } else if (newRole === "admin") {
        adminBtn.classList.add("active-role");
    } else {    
        employerBtn.classList.add("active-role");
    }    
}

async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Please enter both username and password.');
        return;
    }
    if (role === 'employee') {
        try {
            const user = await window.api.employeeLogin(username, password);
            if (user?.success) {                
                // Proceed to the next step in your application
                localStorage.setItem('user', JSON.stringify(user));
                window.location.href = '../employee/index.html';

            }
        }
        catch (error) {
            console.log('Login error:', error);
            alert('Login failed. Please try again.');
        }
    } else if (role === 'employer') {
        try {
            const user = await window.api.employerLogin(username, password);
            if (user?.success) {                
                // Proceed to the next step in your application
                localStorage.setItem('user', JSON.stringify(user));
                window.location.href = '../employer/index.html';

            }
        }
        catch (error) {
            console.log('Login error:', error);
            alert('Login failed. Please try again.');
        }
    } else
        try {
            const user = await window.api.adminLogin(username, password);
            if (user?.success) {                
                // Proceed to the next step in your application
                localStorage.setItem('user', JSON.stringify(user));
                window.location.href = '../admin/index.html';

            }
        }
        catch (error) {
            console.log('Login error:', error);
            alert('Login failed. Please try again.');
        }

    
}

function init() {
    const employeeBtn = document.getElementById("btn_employee");
    employeeBtn.classList.add("active-role");
}

init()