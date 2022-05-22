import $api from "../api";

export default class AutService {

    static async login(username: string, password: string) {

        const header = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',

            }
        }

        const params = new URLSearchParams();
        params.append('email', username)
        params.append('password', password)
        return await $api.post('/auth/login/', params, header);

    }
    static async registration(body: Object) {

        const header = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',

            }
        }

        $api.post('auth/register/', body, header).then((res) => {
        })
    }

    

}