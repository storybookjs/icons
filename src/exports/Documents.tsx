import { lazy } from 'react';

export const Book = lazy(async () => {
  const m = await import('./../icons/Book');
  return { default: m.Book };
});
export const Document = lazy(async () => {
  const m = await import('./../icons/Document');
  return { default: m.Document };
});
export const Copy = lazy(async () => {
  const m = await import('./../icons/Copy');
  return { default: m.Copy };
});
export const Category = lazy(async () => {
  const m = await import('./../icons/Category');
  return { default: m.Category };
});
export const Folder = lazy(async () => {
  const m = await import('./../icons/Folder');
  return { default: m.Folder };
});
export const Print = lazy(async () => {
  const m = await import('./../icons/Print');
  return { default: m.Print };
});
export const Graphline = lazy(async () => {
  const m = await import('./../icons/Graphline');
  return { default: m.Graphline };
});
export const Calendar = lazy(async () => {
  const m = await import('./../icons/Calendar');
  return { default: m.Calendar };
});
export const Graphbar = lazy(async () => {
  const m = await import('./../icons/Graphbar');
  return { default: m.Graphbar };
});
export const Menu = lazy(async () => {
  const m = await import('./../icons/Menu');
  return { default: m.Menu };
});
export const Menureverse = lazy(async () => {
  const m = await import('./../icons/Menureverse');
  return { default: m.Menureverse };
});
export const Filter = lazy(async () => {
  const m = await import('./../icons/Filter');
  return { default: m.Filter };
});
export const Docchart = lazy(async () => {
  const m = await import('./../icons/Docchart');
  return { default: m.Docchart };
});
export const Doclist = lazy(async () => {
  const m = await import('./../icons/Doclist');
  return { default: m.Doclist };
});
