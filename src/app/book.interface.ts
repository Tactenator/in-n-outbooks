/**
 * Name: Trevor McLaurine
 * Date: 9/30/2023
 * Assignment: In-N-Out Books
 * Description: Book Interface
**/

export interface IBook {
  isbn: string;
  title: string;
  authors: Array<string>;
  description: string;
  numOfPages: number;
}
