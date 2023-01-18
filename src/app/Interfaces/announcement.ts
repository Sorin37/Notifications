import { Categories } from "../Enumerations/categories";

export interface Announcement {
    id: string;
    title: string;
    message: string;
    author: string;
    category: string;
    categoryId: Categories;
    imageUrl: string;
}
