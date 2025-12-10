const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
    // Expose APIs here
    fetchWeather: async (city) => {
        // Fetch weather necessities
        const KEY = "ed3568dc030440f7e0903e3bb5007578";
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`;

        try {
            const response = await fetch(URL);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }         
            return await response.json();
        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }
    }
});