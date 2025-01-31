import { useMemo } from 'react';
import { useTypedSelector } from './redux';
import { useQuery } from '@tanstack/react-query';
import { CategoryCode } from '../models/DetailNeighbor.model';
import { getNeighborFromCategory } from '../utils/categorySearch';

interface useDetailNeighborProps {
    categoryId: CategoryCode;
}

export const useDetailNeighbor = ({ categoryId }: useDetailNeighborProps) => {
    const { detailInfo } = useTypedSelector((state) => state.detail);
    const position = useMemo(
        () => ({ lat: detailInfo!.y, lng: detailInfo!.x }),
        [detailInfo],
    );

    const { data: neighbors, isLoading } = useQuery({
        queryKey: ['category', position.lat, position.lng, categoryId],
        queryFn: () =>
            getNeighborFromCategory(categoryId, position.lat, position.lng),
        enabled: !!detailInfo,
    });

    return { neighbors, isLoading };
};
