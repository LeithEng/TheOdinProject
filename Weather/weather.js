const locationForm = document.getElementById('locationForm');
const locationInput = document.getElementById('locationInput');
const weatherInfoDiv = document.getElementById('weatherInfo');
const weatherDataDiv = document.getElementById('weatherData');
const loadingDiv = document.getElementById('loading');
const errorDiv = document.getElementById('error');

async function getWeatherData(location) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        throw new Error("API key is missing. Please set it in the .env file and configure Webpack.");
    }
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}

function processWeatherData(data) {
    if (!data || !data.currentConditions) {
        throw new Error('Invalid or incomplete weather data received.');
    }
    const {
        datetime,
        temp,
        feelslike,
        humidity,
        windspeed,
        description,
        icon
    } = data.currentConditions;

    return {
        location: data.resolvedAddress,
        datetime,
        temperature: temp,
        feelsLike: feelslike,
        humidity,
        windSpeed: windspeed,
        description,
        icon
    };
}

async function getWeatherIcon(iconCode) {
    try {
        const module = await import(`./icons/${iconCode}.js`);
        return module.default;
    } catch (err) {
        console.error('Failed to load icon:', err);
        return '';
    }
}

async function displayWeatherData(weatherData) {
    weatherDataDiv.innerHTML = '';
    errorDiv.classList.add('hidden');

    try {
        const iconUrl = await getWeatherIcon(weatherData.icon);
        const weatherHTML = `
            <div class="bg-white rounded-lg shadow-md p-4 md:p-6 flex flex-col items-center justify-center">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">${weatherData.location}</h3>
                <p class="text-gray-600 mb-2">Date: ${weatherData.datetime}</p>
                <div class="flex items-center justify-center mb-2">
                    <img src="${iconUrl}" alt="${weatherData.description}" class="w-16 h-16 mr-2">
                    <p class="text-2xl font-bold text-gray-800">${weatherData.temperature}°F</p>
                </div>
                <p class="text-gray-600 mb-2">Feels Like: ${weatherData.feelsLike}°F</p>
                <p class="text-gray-600 mb-2">Humidity: ${weatherData.humidity}%</p>
                <p class="text-gray-600 mb-2">Wind Speed: ${weatherData.windSpeed} m/s</p>
                <p class="text-gray-700">${weatherData.description}</p>
            </div>
        `;
        weatherDataDiv.innerHTML = weatherHTML;
    } catch (error) {
        console.error('Error displaying weather data:', error);
        errorDiv.textContent = 'Failed to display weather information.';
        errorDiv.classList.remove('hidden');
        weatherDataDiv.innerHTML = '';
    }
}

locationForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const location = locationInput.value.trim();

    if (!location) {
        errorDiv.textContent = 'Please enter a location.';
        errorDiv.classList.remove('hidden');
        return;
    }

    loadingDiv.classList.remove('hidden');
    errorDiv.classList.add('hidden');
    weatherDataDiv.innerHTML = '';

    try {
        const weatherData = await getWeatherData(location);
        const processedData = processWeatherData(weatherData);
        displayWeatherData(processedData);
    } catch (error) {
        errorDiv.textContent = error.message;
        errorDiv.classList.remove('hidden');
        weatherDataDiv.innerHTML = '';
    } finally {
        loadingDiv.classList.add('hidden');
    }
});