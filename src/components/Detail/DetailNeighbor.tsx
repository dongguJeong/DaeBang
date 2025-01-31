import { useState, Fragment, useMemo } from 'react';
import styled from 'styled-components';
import ErrorBox from '../common/ErrorBox';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';
import { useTypedSelector } from '../../hooks/redux';
import {
    Category,
    CategoryCode,
    PlacesSearchResultItem,
} from '../../models/DetailNeighbor.model';
import { useDetailNeighbor } from '../../hooks/useDetailNeighbor';
import { categories } from '../../utils/constants';

const DetailNeighbor = () => {
    const { detailInfo } = useTypedSelector((state) => state.detail);

    const [currCategory, setCurrCategory] = useState<CategoryCode>('BK9');
    const [order, setOrder] = useState<number>(0);
    const [infoOpen, setInfoOpen] = useState<string>('');

    const { neighbors } = useDetailNeighbor({ categoryId: currCategory });
    const position = useMemo(
        () => ({ lat: detailInfo!.y, lng: detailInfo!.x }),
        [detailInfo],
    );

    const markerImageSrc = '/places_category.png';
    const imageSize = { width: 27, height: 28 };
    const spriteSize = { width: 72, height: 208 };
    const offset = { x: 11, y: 28 };

    const clickCategory = (cat: Category) => {
        setCurrCategory(cat.id);
        setOrder(cat.order);
    };

    const clickMarker = (id: string) => {
        if (infoOpen === id) {
            setInfoOpen('');
        } else {
            setInfoOpen(id);
        }
    };

    return (
        <DetailNeighborStyle>
            <h2>주변 시설</h2>
            {!neighbors ? (
                <>
                    <ErrorBox
                        message="주변 정보 검색에 실패했습니다"
                        height={300}
                    />
                </>
            ) : (
                <>
                    <Map
                        center={position}
                        style={{ width: '100%', height: '300px' }}
                        level={4}
                        zoomable={false}
                    >
                        <MapMarker position={position} />
                        {neighbors.map((neighbor: PlacesSearchResultItem) => (
                            <Fragment key={neighbor.id}>
                                <MapMarker
                                    onClick={() => clickMarker(neighbor.id)}
                                    position={{
                                        lat: parseFloat(neighbor.y),
                                        lng: parseFloat(neighbor.x),
                                    }}
                                    image={{
                                        src: markerImageSrc,
                                        size: imageSize,
                                        options: {
                                            spriteSize,
                                            spriteOrigin: {
                                                x: 46,
                                                y: order * 36,
                                            },
                                            offset,
                                        },
                                    }}
                                ></MapMarker>
                                <CustomOverlayMap
                                    position={{
                                        lat: parseFloat(neighbor.y),
                                        lng: parseFloat(neighbor.x),
                                    }}
                                    yAnchor={1}
                                    xAnchor={0.5}
                                >
                                    {infoOpen === neighbor.id ? (
                                        <div className="info">
                                            <span>{neighbor.place_name} </span>
                                            <br />
                                            <span>{neighbor.distance} m </span>
                                        </div>
                                    ) : null}
                                </CustomOverlayMap>
                            </Fragment>
                        ))}
                    </Map>
                </>
            )}

            <CategoryList>
                {categories.map((category) => (
                    <li
                        data-order={category.order}
                        key={category.id}
                        className={currCategory === category.id ? 'active' : ''}
                        onClick={() => clickCategory(category)}
                    >
                        {category.name}
                    </li>
                ))}
            </CategoryList>
        </DetailNeighborStyle>
    );
};

const DetailNeighborStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    h2 {
        padding: 0 10px;
        padding-bottom: 10px;
    }

    .info {
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: white;
        font-size: 12px;
        width: fit-content;
        text-align: center;
        padding: 2px 4px;
        font-weight: 700;
        border-radius: 4px;
        z-index: 2000;
    }
`;

interface CategoryItemProps {
    $active?: boolean;
}

const CategoryList = styled.ul<CategoryItemProps>`
    list-style: none;
    margin: 0;
    display: flex;
    gap: 8px;
    background: white;
    padding: 8px;
    border-radius: 6px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    li {
        font-size: 12px;
        padding: 4px 8px;
        cursor: pointer;
        border-radius: 4px;
        background: white;
        transition: all 0.2s;

        &:hover {
            background: ${({ $active, theme }) =>
                $active ? `${theme.colors.blue}` : `${theme.colors.gray}`};
        }

        &.active {
            background: ${({ theme }) => theme.colors.blue};
            color: white;
        }
    }
`;

export default DetailNeighbor;
