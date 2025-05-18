export interface IBook {
  id: number;
  title: string;
  author: string;
  description: string;
  genre: string;
  isbn: string;
  pageCount: number;
  price: number;
  coverImageURL: string;
  publishedDate: string; // ISO string
  categoryid: number;
}
