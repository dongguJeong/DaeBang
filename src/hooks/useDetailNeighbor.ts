import { useMemo } from 'react';
import { useTypedSelector } from './redux';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { CategoryCode } from '../models/DetailNeighbor.model';
import {
    getNeighborFromCategory,
    prefetchNeighborbyCategory,
} from '../utils/categorySearch';
import { categories } from '../utils/constants';

interface useDetailNeighborProps {
    categoryId: CategoryCode;
}

export const useDetailNeighbor = ({ categoryId }: useDetailNeighborProps) => {
    const queryClient = new QueryClient();
    const { detailInfo } = useTypedSelector((state) => state.detail);
    const position = useMemo(
        () => ({ lat: detailInfo!.y, lng: detailInfo!.x }),
        [detailInfo],
    );

    categories.forEach((category) => {
        prefetchNeighborbyCategory({
            queryClient,
            id: category.id,
            lat: position.lat,
            lng: position.lng,
        });
    });

    const { data: neighbors, isLoading } = useQuery({
        queryKey: ['category', position.lat, position.lng, categoryId],
        queryFn: () =>
            getNeighborFromCategory(categoryId, position.lat, position.lng),
        enabled: !!detailInfo,
    });

    return { neighbors, isLoading };
};
