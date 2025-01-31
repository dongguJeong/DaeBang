export type CategoryCode =
    | ''
    | 'MT1'
    | 'CS2'
    | 'PS3'
    | 'SC4'
    | 'AC5'
    | 'PK6'
    | 'OL7'
    | 'SW8'
    | 'BK9'
    | 'CT1'
    | 'AG2'
    | 'PO3'
    | 'AT4'
    | 'AD5'
    | 'FD6'
    | 'CE7'
    | 'HP8'
    | 'PM9';

export interface Category {
    id: CategoryCode;
    name: string;
    order: number;
}

export interface PlacesSearchResultItem {
    id: string;
    place_name: string;
    category_name: string;
    category_group_code?: `${CategoryCode}` | `${Exclude<CategoryCode, ''>}`[];
    category_group_name: string;
    phone: string;
    address_name: string;
    road_address_name: string;
    x: string;
    y: string;
    place_url: string;
    distance: string;
}

export type PlacesSearchResult = PlacesSearchResultItem[];

export enum Status {
    ERROR = 'ERROR',
    OK = 'OK',
    ZERO_RESULT = 'ZERO_RESULT',
}
