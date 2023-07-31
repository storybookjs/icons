import { FC } from 'react';
import { IconProps } from '../types';
import React from 'react';

export const Fallback: FC<IconProps> = ({ size }) => {
  return <div style={{ width: size, height: size }} />;
};
