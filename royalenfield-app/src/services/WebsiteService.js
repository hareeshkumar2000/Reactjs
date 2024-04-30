import axios from 'axios';
const WEBSITE_API_BASE_URL = "http://localhost:8080/api/v1/websites";
//  const WEBSITE_API_BASE_URL = "http://localhost:3000/websites";


class WebsiteService {
    // CRUD operation

    getWebsites(){
        return axios.get(WEBSITE_API_BASE_URL);
    }

    createWebsite(data){
        console.log(data)
        return axios.post(WEBSITE_API_BASE_URL, data);
    }

    // getWebsiteById(websiteId){
    //     return axios.get(WEBSITE_API_BASE_URL + '/' + websiteId);
    // }

    updateWebsite(website, websiteId){
        return axios.put(WEBSITE_API_BASE_URL + '/' + websiteId, website);
    }

    deleteWebsite(websiteId){
        console.log(websiteId);
        return axios.delete(WEBSITE_API_BASE_URL + '/' + websiteId);
    }
}

export default new WebsiteService()