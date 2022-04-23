import clientAPI from './config/AxiosConfig';

const baseURL = 'https://api.github.com';

export class GalleryService {
    static getAll() {
        return clientAPI(baseURL).get('/users/');
    }

    static getRepos(name: string) {
        return clientAPI(baseURL).get('/users/' + name);
    }
}