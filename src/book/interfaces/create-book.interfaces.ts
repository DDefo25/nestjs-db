export interface ICreateBookDto  {
    title: string,
    description?: string,
    authors: string[],
    favorite?: string,
    fileCover: string,
    fileName: string,
    fileBook: string,
}