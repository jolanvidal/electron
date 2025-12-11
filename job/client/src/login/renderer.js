let role = 'employee'



function selectRole(newRole) {
    role = newRole;
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
                window.location.href = '../employeeMenu/index.html';

            }
        }
        catch (error) {
            console.log('Login error:', error);
            alert('Login failed. Please try again.');
        }
    } else {
        alert('Selected role is not supported yet.');
    }

    
}
