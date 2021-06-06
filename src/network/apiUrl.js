import api from "./api";

export default class API {
    static async getContacts(body){
        return api.requestGET(`/`, "GET", body);
    }
    static async addContact(body){
        return api.requestPOST(`/`, "POST", body);
    }
}