import { axiosGoogleMap } from "../api";

export class GoogleMapService{
    static async getPlacesFromInput(input: string) {
        const header = {
            headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Credentials': 'true'
          }
        }
        
        return await ( await axiosGoogleMap.get(
            `/place/autocomplete/json?input=${input}&types=geocode&language=en&key=AIzaSyB-TDKmiXZfDIYiK4IXaFfCT47S_Ztz5kY`,header)
        ).data;
    }
}