import axios from 'axios';

const fetchDataDetails = async (setPhoto, id) => {
    try {
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
        setPhoto(response.data.photo);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export default fetchDataDetails;