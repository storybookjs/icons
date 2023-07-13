import { lazy } from 'react';

export const User = lazy(async () => {
  const m = await import('./../icons/User');
  return { default: m.User };
});
export const Useralt = lazy(async () => {
  const m = await import('./../icons/Useralt');
  return { default: m.Useralt };
});
export const Useradd = lazy(async () => {
  const m = await import('./../icons/Useradd');
  return { default: m.Useradd };
});
export const Users = lazy(async () => {
  const m = await import('./../icons/Users');
  return { default: m.Users };
});
export const Profile = lazy(async () => {
  const m = await import('./../icons/Profile');
  return { default: m.Profile };
});
export const Facehappy = lazy(async () => {
  const m = await import('./../icons/Facehappy');
  return { default: m.Facehappy };
});
export const Faceneutral = lazy(async () => {
  const m = await import('./../icons/Faceneutral');
  return { default: m.Faceneutral };
});
export const Facesad = lazy(async () => {
  const m = await import('./../icons/Facesad');
  return { default: m.Facesad };
});
export const Accessibility = lazy(async () => {
  const m = await import('./../icons/Accessibility');
  return { default: m.Accessibility };
});
export const AccessibilityAlt = lazy(async () => {
  const m = await import('./../icons/AccessibilityAlt');
  return { default: m.AccessibilityAlt };
});
