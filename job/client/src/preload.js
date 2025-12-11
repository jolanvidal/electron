const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
    employeeLogin: async (username, password) => {
        const res = await fetch(process.env.EMPLOYEE_LOGIN_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();

        if (data.success) {
            return data;
        }

        throw new Error("Invalid credentials");
    }
});