/**
 * Name: Trevor McLaurine
 * Date: 9/11/2023
 * Assignment: Exercise 6.2 - Input/Output Properties, Part 1
 * Description: Book Interface
**/

export interface IBook {
  isbn: string;
  title: string;
  authors: Array<string>;
  description: string;
  numOfPages: number;
}
