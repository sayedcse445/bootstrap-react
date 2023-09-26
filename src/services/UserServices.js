import axios from "axios"

export class UserServices{
    static serverUrl = 'https://jsonplaceholder.typicode.com/users'
    

    static getAllUser(){
        return axios.get(this.serverUrl)
    }
}