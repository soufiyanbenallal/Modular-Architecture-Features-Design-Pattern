export interface IQueryParams {
    pageSize?: number;
    page?: number;
    sortBy?: number;
    language?: LanguagesType;
    from?: string;
    to?: string;
    sources?: string;
    searchIn?: string;
    q?: string;
}
type LanguagesType = 'ar' | 'en' | 'fr'