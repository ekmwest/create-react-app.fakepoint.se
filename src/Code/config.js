const config = {
    get apiUrl() {
        return (process.env.REACT_APP_API_URL || 'https://api.fakepoint.se').trim();
    },
    get defaultHeaders() {
        return {
            headers: {
                'Authorization': 'Basic ZFhObGNtNWhiV1U2Y0dGemMzZHZjbVE6YldVNmNHRnpjZFhObGNtNWhiV1U2Y0dGemMzZHZjbVFiV1U2Y0dGemM=',
                'Content-Type': 'application/json'
            }
        }
    }
};

export default config;