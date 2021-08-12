import axios from 'axios';

export const clientAxios = axios.create({

    baseURL: 'https://superfuds-assets.s3-sa-east-1.amazonaws.com/utils'

});
export default clientAxios;