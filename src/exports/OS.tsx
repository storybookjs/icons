import { lazy } from 'react';

export const Apple = lazy(async () => {
  const m = await import('./../icons/Apple');
  return { default: m.Apple };
});
export const Linux = lazy(async () => {
  const m = await import('./../icons/Linux');
  return { default: m.Linux };
});
export const Ubuntu = lazy(async () => {
  const m = await import('./../icons/Ubuntu');
  return { default: m.Ubuntu };
});
export const Windows = lazy(async () => {
  const m = await import('./../icons/Windows');
  return { default: m.Windows };
});
export const Chrome = lazy(async () => {
  const m = await import('./../icons/Chrome');
  return { default: m.Chrome };
});
