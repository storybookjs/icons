import { lazy } from 'react';

export const Storybook = lazy(async () => {
  const m = await import('./../icons/Storybook');
  return { default: m.Storybook };
});
export const Azuredevops = lazy(async () => {
  const m = await import('./../icons/Azuredevops');
  return { default: m.Azuredevops };
});
export const Bitbucket = lazy(async () => {
  const m = await import('./../icons/Bitbucket');
  return { default: m.Bitbucket };
});
export const Chromatic = lazy(async () => {
  const m = await import('./../icons/Chromatic');
  return { default: m.Chromatic };
});
export const ComponentDriven = lazy(async () => {
  const m = await import('./../icons/ComponentDriven');
  return { default: m.ComponentDriven };
});
export const Discord = lazy(async () => {
  const m = await import('./../icons/Discord');
  return { default: m.Discord };
});
export const Facebook = lazy(async () => {
  const m = await import('./../icons/Facebook');
  return { default: m.Facebook };
});
export const Figma = lazy(async () => {
  const m = await import('./../icons/Figma');
  return { default: m.Figma };
});
export const Gdrive = lazy(async () => {
  const m = await import('./../icons/Gdrive');
  return { default: m.Gdrive };
});
export const Github = lazy(async () => {
  const m = await import('./../icons/Github');
  return { default: m.Github };
});
export const Gitlab = lazy(async () => {
  const m = await import('./../icons/Gitlab');
  return { default: m.Gitlab };
});
export const Google = lazy(async () => {
  const m = await import('./../icons/Google');
  return { default: m.Google };
});
export const Graphql = lazy(async () => {
  const m = await import('./../icons/Graphql');
  return { default: m.Graphql };
});
export const Medium = lazy(async () => {
  const m = await import('./../icons/Medium');
  return { default: m.Medium };
});
export const Redux = lazy(async () => {
  const m = await import('./../icons/Redux');
  return { default: m.Redux };
});
export const Twitter = lazy(async () => {
  const m = await import('./../icons/Twitter');
  return { default: m.Twitter };
});
export const Youtube = lazy(async () => {
  const m = await import('./../icons/Youtube');
  return { default: m.Youtube };
});
export const VSCode = lazy(async () => {
  const m = await import('./../icons/VSCode');
  return { default: m.VSCode };
});
export const Linkedin = lazy(async () => {
  const m = await import('./../icons/Linkedin');
  return { default: m.Linkedin };
});
