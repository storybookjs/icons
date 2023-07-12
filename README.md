# Icons

<img src="public/cover.jpg" />

This library contains the icons used in Chromatic and Storybook.

## Install

```console
yarn add @chromaui/tetra
```

## To Do

- [x] Export every single icons instead of a single component
- [ ] Add stories for each components
- [ ] Import coloured icons

## Generating new icons from Figma

This command will fetch all icons from Figma locally and create react components + stories automatically

```console
yarn icons
```

Inpired from [this article](https://blog.certa.dev/generating-react-icon-components-from-figma).

## Developing

Watch and rebuild code with `tsup` and runs Storybook to preview your UI during development.

```console
yarn storybook
```

## Building

Build package with `tsup` for production.

```console
yarn build
```
