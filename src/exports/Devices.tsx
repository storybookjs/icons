import { lazy } from 'react';

export const Browser = lazy(async () => {
  const m = await import('./../icons/Browser');
  return { default: m.Browser };
});
export const Tablet = lazy(async () => {
  const m = await import('./../icons/Tablet');
  return { default: m.Tablet };
});
export const Mobile = lazy(async () => {
  const m = await import('./../icons/Mobile');
  return { default: m.Mobile };
});
export const Watch = lazy(async () => {
  const m = await import('./../icons/Watch');
  return { default: m.Watch };
});
export const Sidebar = lazy(async () => {
  const m = await import('./../icons/Sidebar');
  return { default: m.Sidebar };
});
export const SidebarAlt = lazy(async () => {
  const m = await import('./../icons/SidebarAlt');
  return { default: m.SidebarAlt };
});
export const Sidebaralttoggle = lazy(async () => {
  const m = await import('./../icons/Sidebaralttoggle');
  return { default: m.Sidebaralttoggle };
});
export const Sidebartoggle = lazy(async () => {
  const m = await import('./../icons/Sidebartoggle');
  return { default: m.Sidebartoggle };
});
export const Bottombar = lazy(async () => {
  const m = await import('./../icons/Bottombar');
  return { default: m.Bottombar };
});
export const Bottombartoggle = lazy(async () => {
  const m = await import('./../icons/Bottombartoggle');
  return { default: m.Bottombartoggle };
});
export const Cpu = lazy(async () => {
  const m = await import('./../icons/Cpu');
  return { default: m.Cpu };
});
export const Database = lazy(async () => {
  const m = await import('./../icons/Database');
  return { default: m.Database };
});
export const Memory = lazy(async () => {
  const m = await import('./../icons/Memory');
  return { default: m.Memory };
});
export const Structure = lazy(async () => {
  const m = await import('./../icons/Structure');
  return { default: m.Structure };
});
export const Box = lazy(async () => {
  const m = await import('./../icons/Box');
  return { default: m.Box };
});
export const Power = lazy(async () => {
  const m = await import('./../icons/Power');
  return { default: m.Power };
});
