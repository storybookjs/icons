import React from 'react';
import { Photo, Component, Grid, Outline, PhotoDrag, GridAlt, Search, Zoom, ZoomOut, ZoomReset, Eye, EyeClose, Lightning, LightningOff, Contrast, SwitchAlt, Mirror, Grow, PaintBrush, Ruler, Stop, Camera, Video, Speaker, Play, PlayBack, PlayNext, Rewind, FastForward, StopAlt, SideBySide, Stacked, Sun, Moon, } from './groups/Images';
import { Book, Document, Copy, Category, Folder, Print, GraphLine, Calendar, GraphBar, Menu, MenuReverse, Filter, DocChart, CocList, } from './groups/Documents';
import { Markup, Bold, Italic, PaperClip, ListOrdered, ListUnordered, Paragraph, Markdown, } from './groups/Editing';
import { Repo, Commit, Branch, PullRequest, Merge, } from './groups/Git';
import { Apple, Linux, Ubuntu, Windows, Chrome, } from './groups/OS';
import { Storybook, AzureDevOps, Bitbucket, Chromatic, ComponentDriven, Discord, Facebook, Figma, GDrive, Github, Gitlab, Google, Graphql, Medium, Redux, Twitter, Youtube, VSCode, Linkedin, } from './groups/Logos';
import { Browser, Tablet, Mobile, Watch, Sidebar, SidebarAlt, SidebarAltToggle, SidebarToggle, BottomBar, BottomBarToggle, CPU, Database, Memory, Structure, Box, Power, } from './groups/Devices';
import { Edit, Cog, Nut, Wrench, Ellipsis, Wand, Check, Form, BatchDeny, BatchAccept, Controls, Plus, CloseAlt, Cross, Trash, PinAlt, Unpin, Add, Subtract, Close, Delete, Passed, Changed, Failed, Clear, Comment, CommentAdd, RequestChange, Comments, Chat, Lock, Unlock, Key, Outbox, Credit, Button, Type, PointerDefault, PointerHand, Command, } from './groups/CRUD';
import { Info, Question, Support, Alert, AlertAlt, Email, Phone, Link, LinkBroken, Bell, RSS, ShareAlt, Share, JumpTo, CircleHollow, Circle, BookmarkHollow, Bookmark, Diamond, HeartHollow, Heart, StarHollow, Star, Certificate, Verified, ThumbsUp, Shield, Basket, Beaker, Hourglass, Flag, CloudHollow, Cloud, Sticker, } from './groups/Communicate';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, ArrowSolidUp, ArrowSolidDown, ArrowSolidLeft, ArrowSolidRight, ExpandAlt, Collapse, Expand, Unfold, Transfer, Redirect, Undo, Reply, Sync, Upload, Download, Back, Proceed, Refresh, Globe, Compass, Location, Pin, Time, Dashboard, Timer, Home, Admin, Direction, } from './groups/Wayfinding';
import { User, UserAlt, UserAdd, Users, Profile, FaceHappy, FaceNeutral, FaceSad, Accessibility, AccessibilityAlt, } from './groups/People';

export const list = [
  {
    name: 'Images',
    icons: [
      {
        name: 'Photo',
        icon: <Photo />
      },
      {
        name: 'Component',
        icon: <Component />
      },
      {
        name: 'Grid',
        icon: <Grid />
      },
      {
        name: 'Outline',
        icon: <Outline />
      },
      {
        name: 'PhotoDrag',
        icon: <PhotoDrag />
      },
      {
        name: 'GridAlt',
        icon: <GridAlt />
      },
      {
        name: 'Search',
        icon: <Search />
      },
      {
        name: 'Zoom',
        icon: <Zoom />
      },
      {
        name: 'ZoomOut',
        icon: <ZoomOut />
      },
      {
        name: 'ZoomReset',
        icon: <ZoomReset />
      },
      {
        name: 'Eye',
        icon: <Eye />
      },
      {
        name: 'EyeClose',
        icon: <EyeClose />
      },
      {
        name: 'Lightning',
        icon: <Lightning />
      },
      {
        name: 'LightningOff',
        icon: <LightningOff />
      },
      {
        name: 'Contrast',
        icon: <Contrast />
      },
      {
        name: 'SwitchAlt',
        icon: <SwitchAlt />
      },
      {
        name: 'Mirror',
        icon: <Mirror />
      },
      {
        name: 'Grow',
        icon: <Grow />
      },
      {
        name: 'PaintBrush',
        icon: <PaintBrush />
      },
      {
        name: 'Ruler',
        icon: <Ruler />
      },
      {
        name: 'Stop',
        icon: <Stop />
      },
      {
        name: 'Camera',
        icon: <Camera />
      },
      {
        name: 'Video',
        icon: <Video />
      },
      {
        name: 'Speaker',
        icon: <Speaker />
      },
      {
        name: 'Play',
        icon: <Play />
      },
      {
        name: 'PlayBack',
        icon: <PlayBack />
      },
      {
        name: 'PlayNext',
        icon: <PlayNext />
      },
      {
        name: 'Rewind',
        icon: <Rewind />
      },
      {
        name: 'FastForward',
        icon: <FastForward />
      },
      {
        name: 'StopAlt',
        icon: <StopAlt />
      },
      {
        name: 'SideBySide',
        icon: <SideBySide />
      },
      {
        name: 'Stacked',
        icon: <Stacked />
      },
      {
        name: 'Sun',
        icon: <Sun />
      },
      {
        name: 'Moon',
        icon: <Moon />
      },
    ]
  },
  {
    name: 'Documents',
    icons: [
      {
        name: 'Book',
        icon: <Book />
      },
      {
        name: 'Document',
        icon: <Document />
      },
      {
        name: 'Copy',
        icon: <Copy />
      },
      {
        name: 'Category',
        icon: <Category />
      },
      {
        name: 'Folder',
        icon: <Folder />
      },
      {
        name: 'Print',
        icon: <Print />
      },
      {
        name: 'GraphLine',
        icon: <GraphLine />
      },
      {
        name: 'Calendar',
        icon: <Calendar />
      },
      {
        name: 'GraphBar',
        icon: <GraphBar />
      },
      {
        name: 'Menu',
        icon: <Menu />
      },
      {
        name: 'MenuReverse',
        icon: <MenuReverse />
      },
      {
        name: 'Filter',
        icon: <Filter />
      },
      {
        name: 'DocChart',
        icon: <DocChart />
      },
      {
        name: 'CocList',
        icon: <CocList />
      },
    ]
  },
  {
    name: 'Editing',
    icons: [
      {
        name: 'Markup',
        icon: <Markup />
      },
      {
        name: 'Bold',
        icon: <Bold />
      },
      {
        name: 'Italic',
        icon: <Italic />
      },
      {
        name: 'PaperClip',
        icon: <PaperClip />
      },
      {
        name: 'ListOrdered',
        icon: <ListOrdered />
      },
      {
        name: 'ListUnordered',
        icon: <ListUnordered />
      },
      {
        name: 'Paragraph',
        icon: <Paragraph />
      },
      {
        name: 'Markdown',
        icon: <Markdown />
      },
    ]
  },
  {
    name: 'Git',
    icons: [
      {
        name: 'Repo',
        icon: <Repo />
      },
      {
        name: 'Commit',
        icon: <Commit />
      },
      {
        name: 'Branch',
        icon: <Branch />
      },
      {
        name: 'PullRequest',
        icon: <PullRequest />
      },
      {
        name: 'Merge',
        icon: <Merge />
      },
    ]
  },
  {
    name: 'OS',
    icons: [
      {
        name: 'Apple',
        icon: <Apple />
      },
      {
        name: 'Linux',
        icon: <Linux />
      },
      {
        name: 'Ubuntu',
        icon: <Ubuntu />
      },
      {
        name: 'Windows',
        icon: <Windows />
      },
      {
        name: 'Chrome',
        icon: <Chrome />
      },
    ]
  },
  {
    name: 'Logos',
    icons: [
      {
        name: 'Storybook',
        icon: <Storybook />
      },
      {
        name: 'AzureDevOps',
        icon: <AzureDevOps />
      },
      {
        name: 'Bitbucket',
        icon: <Bitbucket />
      },
      {
        name: 'Chromatic',
        icon: <Chromatic />
      },
      {
        name: 'ComponentDriven',
        icon: <ComponentDriven />
      },
      {
        name: 'Discord',
        icon: <Discord />
      },
      {
        name: 'Facebook',
        icon: <Facebook />
      },
      {
        name: 'Figma',
        icon: <Figma />
      },
      {
        name: 'GDrive',
        icon: <GDrive />
      },
      {
        name: 'Github',
        icon: <Github />
      },
      {
        name: 'Gitlab',
        icon: <Gitlab />
      },
      {
        name: 'Google',
        icon: <Google />
      },
      {
        name: 'Graphql',
        icon: <Graphql />
      },
      {
        name: 'Medium',
        icon: <Medium />
      },
      {
        name: 'Redux',
        icon: <Redux />
      },
      {
        name: 'Twitter',
        icon: <Twitter />
      },
      {
        name: 'Youtube',
        icon: <Youtube />
      },
      {
        name: 'VSCode',
        icon: <VSCode />
      },
      {
        name: 'Linkedin',
        icon: <Linkedin />
      },
    ]
  },
  {
    name: 'Devices',
    icons: [
      {
        name: 'Browser',
        icon: <Browser />
      },
      {
        name: 'Tablet',
        icon: <Tablet />
      },
      {
        name: 'Mobile',
        icon: <Mobile />
      },
      {
        name: 'Watch',
        icon: <Watch />
      },
      {
        name: 'Sidebar',
        icon: <Sidebar />
      },
      {
        name: 'SidebarAlt',
        icon: <SidebarAlt />
      },
      {
        name: 'SidebarAltToggle',
        icon: <SidebarAltToggle />
      },
      {
        name: 'SidebarToggle',
        icon: <SidebarToggle />
      },
      {
        name: 'BottomBar',
        icon: <BottomBar />
      },
      {
        name: 'BottomBarToggle',
        icon: <BottomBarToggle />
      },
      {
        name: 'CPU',
        icon: <CPU />
      },
      {
        name: 'Database',
        icon: <Database />
      },
      {
        name: 'Memory',
        icon: <Memory />
      },
      {
        name: 'Structure',
        icon: <Structure />
      },
      {
        name: 'Box',
        icon: <Box />
      },
      {
        name: 'Power',
        icon: <Power />
      },
    ]
  },
  {
    name: 'CRUD',
    icons: [
      {
        name: 'Edit',
        icon: <Edit />
      },
      {
        name: 'Cog',
        icon: <Cog />
      },
      {
        name: 'Nut',
        icon: <Nut />
      },
      {
        name: 'Wrench',
        icon: <Wrench />
      },
      {
        name: 'Ellipsis',
        icon: <Ellipsis />
      },
      {
        name: 'Wand',
        icon: <Wand />
      },
      {
        name: 'Check',
        icon: <Check />
      },
      {
        name: 'Form',
        icon: <Form />
      },
      {
        name: 'BatchDeny',
        icon: <BatchDeny />
      },
      {
        name: 'BatchAccept',
        icon: <BatchAccept />
      },
      {
        name: 'Controls',
        icon: <Controls />
      },
      {
        name: 'Plus',
        icon: <Plus />
      },
      {
        name: 'CloseAlt',
        icon: <CloseAlt />
      },
      {
        name: 'Cross',
        icon: <Cross />
      },
      {
        name: 'Trash',
        icon: <Trash />
      },
      {
        name: 'PinAlt',
        icon: <PinAlt />
      },
      {
        name: 'Unpin',
        icon: <Unpin />
      },
      {
        name: 'Add',
        icon: <Add />
      },
      {
        name: 'Subtract',
        icon: <Subtract />
      },
      {
        name: 'Close',
        icon: <Close />
      },
      {
        name: 'Delete',
        icon: <Delete />
      },
      {
        name: 'Passed',
        icon: <Passed />
      },
      {
        name: 'Changed',
        icon: <Changed />
      },
      {
        name: 'Failed',
        icon: <Failed />
      },
      {
        name: 'Clear',
        icon: <Clear />
      },
      {
        name: 'Comment',
        icon: <Comment />
      },
      {
        name: 'CommentAdd',
        icon: <CommentAdd />
      },
      {
        name: 'RequestChange',
        icon: <RequestChange />
      },
      {
        name: 'Comments',
        icon: <Comments />
      },
      {
        name: 'Chat',
        icon: <Chat />
      },
      {
        name: 'Lock',
        icon: <Lock />
      },
      {
        name: 'Unlock',
        icon: <Unlock />
      },
      {
        name: 'Key',
        icon: <Key />
      },
      {
        name: 'Outbox',
        icon: <Outbox />
      },
      {
        name: 'Credit',
        icon: <Credit />
      },
      {
        name: 'Button',
        icon: <Button />
      },
      {
        name: 'Type',
        icon: <Type />
      },
      {
        name: 'PointerDefault',
        icon: <PointerDefault />
      },
      {
        name: 'PointerHand',
        icon: <PointerHand />
      },
      {
        name: 'Command',
        icon: <Command />
      },
    ]
  },
  {
    name: 'Communicate',
    icons: [
      {
        name: 'Info',
        icon: <Info />
      },
      {
        name: 'Question',
        icon: <Question />
      },
      {
        name: 'Support',
        icon: <Support />
      },
      {
        name: 'Alert',
        icon: <Alert />
      },
      {
        name: 'AlertAlt',
        icon: <AlertAlt />
      },
      {
        name: 'Email',
        icon: <Email />
      },
      {
        name: 'Phone',
        icon: <Phone />
      },
      {
        name: 'Link',
        icon: <Link />
      },
      {
        name: 'LinkBroken',
        icon: <LinkBroken />
      },
      {
        name: 'Bell',
        icon: <Bell />
      },
      {
        name: 'RSS',
        icon: <RSS />
      },
      {
        name: 'ShareAlt',
        icon: <ShareAlt />
      },
      {
        name: 'Share',
        icon: <Share />
      },
      {
        name: 'JumpTo',
        icon: <JumpTo />
      },
      {
        name: 'CircleHollow',
        icon: <CircleHollow />
      },
      {
        name: 'Circle',
        icon: <Circle />
      },
      {
        name: 'BookmarkHollow',
        icon: <BookmarkHollow />
      },
      {
        name: 'Bookmark',
        icon: <Bookmark />
      },
      {
        name: 'Diamond',
        icon: <Diamond />
      },
      {
        name: 'HeartHollow',
        icon: <HeartHollow />
      },
      {
        name: 'Heart',
        icon: <Heart />
      },
      {
        name: 'StarHollow',
        icon: <StarHollow />
      },
      {
        name: 'Star',
        icon: <Star />
      },
      {
        name: 'Certificate',
        icon: <Certificate />
      },
      {
        name: 'Verified',
        icon: <Verified />
      },
      {
        name: 'ThumbsUp',
        icon: <ThumbsUp />
      },
      {
        name: 'Shield',
        icon: <Shield />
      },
      {
        name: 'Basket',
        icon: <Basket />
      },
      {
        name: 'Beaker',
        icon: <Beaker />
      },
      {
        name: 'Hourglass',
        icon: <Hourglass />
      },
      {
        name: 'Flag',
        icon: <Flag />
      },
      {
        name: 'CloudHollow',
        icon: <CloudHollow />
      },
      {
        name: 'Cloud',
        icon: <Cloud />
      },
      {
        name: 'Sticker',
        icon: <Sticker />
      },
    ]
  },
  {
    name: 'Wayfinding',
    icons: [
      {
        name: 'ChevronUp',
        icon: <ChevronUp />
      },
      {
        name: 'ChevronDown',
        icon: <ChevronDown />
      },
      {
        name: 'ChevronLeft',
        icon: <ChevronLeft />
      },
      {
        name: 'ChevronRight',
        icon: <ChevronRight />
      },
      {
        name: 'ArrowUp',
        icon: <ArrowUp />
      },
      {
        name: 'ArrowDown',
        icon: <ArrowDown />
      },
      {
        name: 'ArrowLeft',
        icon: <ArrowLeft />
      },
      {
        name: 'ArrowRight',
        icon: <ArrowRight />
      },
      {
        name: 'ArrowSolidUp',
        icon: <ArrowSolidUp />
      },
      {
        name: 'ArrowSolidDown',
        icon: <ArrowSolidDown />
      },
      {
        name: 'ArrowSolidLeft',
        icon: <ArrowSolidLeft />
      },
      {
        name: 'ArrowSolidRight',
        icon: <ArrowSolidRight />
      },
      {
        name: 'ExpandAlt',
        icon: <ExpandAlt />
      },
      {
        name: 'Collapse',
        icon: <Collapse />
      },
      {
        name: 'Expand',
        icon: <Expand />
      },
      {
        name: 'Unfold',
        icon: <Unfold />
      },
      {
        name: 'Transfer',
        icon: <Transfer />
      },
      {
        name: 'Redirect',
        icon: <Redirect />
      },
      {
        name: 'Undo',
        icon: <Undo />
      },
      {
        name: 'Reply',
        icon: <Reply />
      },
      {
        name: 'Sync',
        icon: <Sync />
      },
      {
        name: 'Upload',
        icon: <Upload />
      },
      {
        name: 'Download',
        icon: <Download />
      },
      {
        name: 'Back',
        icon: <Back />
      },
      {
        name: 'Proceed',
        icon: <Proceed />
      },
      {
        name: 'Refresh',
        icon: <Refresh />
      },
      {
        name: 'Globe',
        icon: <Globe />
      },
      {
        name: 'Compass',
        icon: <Compass />
      },
      {
        name: 'Location',
        icon: <Location />
      },
      {
        name: 'Pin',
        icon: <Pin />
      },
      {
        name: 'Time',
        icon: <Time />
      },
      {
        name: 'Dashboard',
        icon: <Dashboard />
      },
      {
        name: 'Timer',
        icon: <Timer />
      },
      {
        name: 'Home',
        icon: <Home />
      },
      {
        name: 'Admin',
        icon: <Admin />
      },
      {
        name: 'Direction',
        icon: <Direction />
      },
    ]
  },
  {
    name: 'People',
    icons: [
      {
        name: 'User',
        icon: <User />
      },
      {
        name: 'UserAlt',
        icon: <UserAlt />
      },
      {
        name: 'UserAdd',
        icon: <UserAdd />
      },
      {
        name: 'Users',
        icon: <Users />
      },
      {
        name: 'Profile',
        icon: <Profile />
      },
      {
        name: 'FaceHappy',
        icon: <FaceHappy />
      },
      {
        name: 'FaceNeutral',
        icon: <FaceNeutral />
      },
      {
        name: 'FaceSad',
        icon: <FaceSad />
      },
      {
        name: 'Accessibility',
        icon: <Accessibility />
      },
      {
        name: 'AccessibilityAlt',
        icon: <AccessibilityAlt />
      },
    ]
  },
];
