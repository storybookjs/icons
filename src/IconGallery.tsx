import React, { useState } from 'react';
import { styled } from '@storybook/theming';
import { IconGallery as GalleryBlock, IconItem } from '@storybook/blocks';

import * as Icon from './index';
import { iconList } from './iconList';

const Input = styled.input(({ theme }) => ({
  appearance: 'none',
  height: 28,
  paddingLeft: 28,
  paddingRight: 28,
  border: 0,
  boxShadow: `${theme.button.border} 0 0 0 1px inset`,
  background: 'transparent',
  borderRadius: 4,
  fontSize: `${theme.typography.size.s1 + 1}px`,
  fontFamily: 'inherit',
  transition: 'all 150ms',
  color: theme.color.defaultText,

  '&:focus, &:active': {
    outline: 0,
    borderColor: theme.color.secondary,
    background: theme.background.app,
  },
  '&::placeholder': {
    color: theme.textMutedColor,
    opacity: 1,
  },
  '&:valid ~ code, &:focus ~ code': {
    display: 'none',
  },
  '&:invalid ~ svg': {
    display: 'none',
  },
  '&:valid ~ svg': {
    display: 'block',
  },
  '&::-ms-clear': {
    display: 'none',
  },
  '&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration':
  {
    display: 'none',
  },
}));

export const IconGallery = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredList = iconList
    .map((category) => {
      const filteredIcons = category.icons.filter((icon) =>
        icon.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (filteredIcons.length > 0) {
        return {
          name: category.name,
          icons: filteredIcons,
        };
      }

      return null;
    })
    .filter((category) => category !== null);

  return (
    <div>
      <Input
        type="text"
        placeholder="Search icons"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div>
        {filteredList.length === 0 ? <div style={{ paddingTop: 32 }}>No icons matched "{searchTerm}"</div> : filteredList.map((group) => {
          return (
            <div key={group?.name}>
              <h2 style={{ marginTop: 32, marginBottom: 24 }}>{group?.name}</h2>
              <GalleryBlock>
                {group?.icons.map((item) => {
                  const MyIcon = Icon[item as keyof typeof Icon] as any;
                  return (
                    <IconItem key={item} name={item}>
                      <MyIcon />
                    </IconItem>
                  );
                })}
              </GalleryBlock>
            </div>
          )
        })}
      </div>
    </div>
  );
};
