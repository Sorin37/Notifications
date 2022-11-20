import { Categories } from "../Enumerations/categories";

export interface Announcement {
    id: string;
    title: string;
    message: string;
    author: string;
    category: Categories;
    imageUrl: string;
}
