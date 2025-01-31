import { QueryClient } from '@tanstack/react-query';
import {
    CategoryCode,
    PlacesSearchResult,
    Status,
} from '../models/DetailNeighbor.model';

export const getNeighborFromCategory = async (
    code: CategoryCode,
    lat: number,
    lng: number,
): Promise<PlacesSearchResult> => {
    return new Promise((resolve, reject) => {
        const ps = new kakao.maps.services.Places();
        ps.categorySearch(
            code,
            (data: PlacesSearchResult, status: Status) => {
                if (status === Status.OK) {
                    resolve(data);
                } else {
                    resolve([]);
                }
            },
            {
                location: new kakao.maps.LatLng(lat, lng),
                useMapBounds: true,
            },
        );
    });
};
