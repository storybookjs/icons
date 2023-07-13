import { lazy } from 'react';

export const Markup = lazy(async () => {
  const m = await import('./../icons/Markup');
  return { default: m.Markup };
});
export const Bold = lazy(async () => {
  const m = await import('./../icons/Bold');
  return { default: m.Bold };
});
export const Italic = lazy(async () => {
  const m = await import('./../icons/Italic');
  return { default: m.Italic };
});
export const Paperclip = lazy(async () => {
  const m = await import('./../icons/Paperclip');
  return { default: m.Paperclip };
});
export const Listordered = lazy(async () => {
  const m = await import('./../icons/Listordered');
  return { default: m.Listordered };
});
export const Listunordered = lazy(async () => {
  const m = await import('./../icons/Listunordered');
  return { default: m.Listunordered };
});
export const Paragraph = lazy(async () => {
  const m = await import('./../icons/Paragraph');
  return { default: m.Paragraph };
});
export const Markdown = lazy(async () => {
  const m = await import('./../icons/Markdown');
  return { default: m.Markdown };
});
