import axios from 'axios'
const USER_API_URL = 'http://localhost:8080/data/v1' 

class UserDataService {
    CreateBidPrice() { //menampilkan profil user
        return axios.post(`http://localhost:8080/data/bbri/bbribid`, bbribid);
    }

    CreateOfferPrice() { //menampilkan profil user
        return axios.post(`http://localhost:8080/data/bbri/bbrioffer`, bbrioffer);
    }

    GetBidById() { //menampilkan profil user
        return axios.get(`http://localhost:8080/data/bbri/bbribid`);
    }

    GetOfferById() { //menampilkan profil user
        return axios.get(`http://localhost:8080/data/bbri/bbrioffer`);
    }

}
