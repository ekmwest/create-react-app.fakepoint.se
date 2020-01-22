const config = {
    get apiUrl() {
        return (process.env.REACT_APP_API_URL || 'https://api.fakepoint.se').trim();
    }
};

export default config;