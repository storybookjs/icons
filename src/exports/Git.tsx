import { lazy } from 'react';

export const Repo = lazy(async () => {
  const m = await import('./../icons/Repo');
  return { default: m.Repo };
});
export const Commit = lazy(async () => {
  const m = await import('./../icons/Commit');
  return { default: m.Commit };
});
export const Branch = lazy(async () => {
  const m = await import('./../icons/Branch');
  return { default: m.Branch };
});
export const Pullrequest = lazy(async () => {
  const m = await import('./../icons/Pullrequest');
  return { default: m.Pullrequest };
});
export const Merge = lazy(async () => {
  const m = await import('./../icons/Merge');
  return { default: m.Merge };
});
