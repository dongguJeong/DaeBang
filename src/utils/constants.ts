import { Position } from '../components/Map';
import { Category } from '../models/DetailNeighbor.model';

export const WIDTH = '350px';

// 사용자의 현재 위치를 가져오는데 실패했을 때의 기본 위치
export const MAP_CENTER_POSITION: Position = {
    lat: 37.49436732800421,
    lng: 127.01446798508894,
};

// 지도의 기본 줌 레벨
export const MAP_ZOOM_LEVEL = 5;

export const categories: Category[] = [
    { id: 'BK9', name: '은행', order: 0 },
    { id: 'MT1', name: '마트', order: 1 },
    { id: 'PM9', name: '약국', order: 2 },
    { id: 'SW8', name: '지하철', order: 3 },
    { id: 'PO3', name: '관공서', order: 4 },
    { id: 'CS2', name: '편의점', order: 5 },
];
