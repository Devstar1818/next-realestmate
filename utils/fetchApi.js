import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
    const { data } = await axios.get(url, {
        headers: {
            'X-RapidAPI-Key': 'd164d4aa65msh870a3313f54981ap1b191ajsn6ac959fead30',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
    return data;
}