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

interface prefetchNeighborbyCategoryProps {
    queryClient: QueryClient;
    id: CategoryCode;
    lat: number;
    lng: number;
}

export const prefetchNeighborbyCategory = async ({
    queryClient,
    id,
    lat,
    lng,
}: prefetchNeighborbyCategoryProps) => {
    await queryClient.prefetchQuery({
        queryKey: ['category', lat, lng, id],
        queryFn: () => getNeighborFromCategory(id, lat, lng),
    });
};
