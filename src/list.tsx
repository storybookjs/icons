import React from 'react';
import {
  Photo,
  Component,
  Grid,
  Outline,
  PhotoDrag,
  Gridalt,
  Search,
  Zoom,
  Zoomout,
  Zoomreset,
  Eye,
  Eyeclose,
  Lightning,
  Lightningoff,
  Contrast,
  Switchalt,
  Mirror,
  Grow,
  Paintbrush,
  Ruler,
  Stop,
  Camera,
  Video,
  Speaker,
  Play,
  Playback,
  Playnext,
  Rewind,
  Fastforward,
  Stopalt,
  Sidebyside,
  Stacked,
  Sun,
  Moon,
} from './groups/Images';
import {
  Book,
  Document,
  Copy,
  Category,
  Folder,
  Print,
  Graphline,
  Calendar,
  Graphbar,
  Menu,
  Menureverse,
  Filter,
  Docchart,
  Doclist,
} from './groups/Documents';
import {
  Markup,
  Bold,
  Italic,
  Paperclip,
  Listordered,
  Listunordered,
  Paragraph,
  Markdown,
} from './groups/Editing';
import { Repo, Commit, Branch, Pullrequest, Merge } from './groups/Git';
import { Apple, Linux, Ubuntu, Windows, Chrome } from './groups/OS';
import {
  Storybook,
  Azuredevops,
  Bitbucket,
  Chromatic,
  ComponentDriven,
  Discord,
  Facebook,
  Figma,
  Gdrive,
  Github,
  Gitlab,
  Google,
  Graphql,
  Medium,
  Redux,
  Twitter,
  Youtube,
  VSCode,
  Linkedin,
} from './groups/Logos';
import {
  Browser,
  Tablet,
  Mobile,
  Watch,
  Sidebar,
  SidebarAlt,
  Sidebaralttoggle,
  Sidebartoggle,
  Bottombar,
  Bottombartoggle,
  Cpu,
  Database,
  Memory,
  Structure,
  Box,
  Power,
} from './groups/Devices';
import {
  Edit,
  Cog,
  Nut,
  Wrench,
  Ellipsis,
  Wand,
  Check,
  Form,
  Batchdeny,
  Batchaccept,
  Controls,
  Plus,
  CloseAlt,
  Cross,
  Trash,
  Pinalt,
  Unpin,
  Add,
  Subtract,
  Close,
  Delete,
  Passed,
  Changed,
  Failed,
  Clear,
  Comment,
  Commentadd,
  Requestchange,
  Comments,
  Chat,
  Lock,
  Unlock,
  Key,
  Outbox,
  Credit,
  Button,
  Type,
  Pointerdefault,
  Pointerhand,
  Command,
} from './groups/CRUD';
import {
  Info,
  Question,
  Support,
  Alert,
  Alertalt,
  Email,
  Phone,
  Link,
  Linkbroken,
  Bell,
  Rss,
  Sharealt,
  Share,
  Jumpto,
  Circlehollow,
  Circle,
  Bookmarkhollow,
  Bookmark,
  Diamond,
  Hearthollow,
  Heart,
  Starhollow,
  Star,
  Certificate,
  Verified,
  Thumbsup,
  Shield,
  Basket,
  Beaker,
  Hourglass,
  Flag,
  Cloudhollow,
  Cloud,
  Sticker,
} from './groups/Communicate';
import {
  Arrowup,
  Arrowdown,
  Arrowleft,
  Arrowright,
  Arrowupalt,
  Arrowdownalt,
  Arrowleftalt,
  Arrowrightalt,
  ExpandAlt,
  Collapse,
  Expand,
  Unfold,
  Transfer,
  Redirect,
  Undo,
  Reply,
  Sync,
  Upload,
  Download,
  Back,
  Proceed,
  Refresh,
  Globe,
  Compass,
  Location,
  Pin,
  Time,
  Dashboard,
  Timer,
  Home,
  Admin,
  Direction,
} from './groups/Wayfinding';
import {
  User,
  Useralt,
  Useradd,
  Users,
  Profile,
  Facehappy,
  Faceneutral,
  Facesad,
  Accessibility,
  AccessibilityAlt,
} from './groups/People';

export const list = [
  {
    name: 'Images',
    icons: [
      {
        name: 'Photo',
        icon: <Photo />,
      },
      {
        name: 'Component',
        icon: <Component />,
      },
      {
        name: 'Grid',
        icon: <Grid />,
      },
      {
        name: 'Outline',
        icon: <Outline />,
      },
      {
        name: 'PhotoDrag',
        icon: <PhotoDrag />,
      },
      {
        name: 'Gridalt',
        icon: <Gridalt />,
      },
      {
        name: 'Search',
        icon: <Search />,
      },
      {
        name: 'Zoom',
        icon: <Zoom />,
      },
      {
        name: 'Zoomout',
        icon: <Zoomout />,
      },
      {
        name: 'Zoomreset',
        icon: <Zoomreset />,
      },
      {
        name: 'Eye',
        icon: <Eye />,
      },
      {
        name: 'Eyeclose',
        icon: <Eyeclose />,
      },
      {
        name: 'Lightning',
        icon: <Lightning />,
      },
      {
        name: 'Lightningoff',
        icon: <Lightningoff />,
      },
      {
        name: 'Contrast',
        icon: <Contrast />,
      },
      {
        name: 'Switchalt',
        icon: <Switchalt />,
      },
      {
        name: 'Mirror',
        icon: <Mirror />,
      },
      {
        name: 'Grow',
        icon: <Grow />,
      },
      {
        name: 'Paintbrush',
        icon: <Paintbrush />,
      },
      {
        name: 'Ruler',
        icon: <Ruler />,
      },
      {
        name: 'Stop',
        icon: <Stop />,
      },
      {
        name: 'Camera',
        icon: <Camera />,
      },
      {
        name: 'Video',
        icon: <Video />,
      },
      {
        name: 'Speaker',
        icon: <Speaker />,
      },
      {
        name: 'Play',
        icon: <Play />,
      },
      {
        name: 'Playback',
        icon: <Playback />,
      },
      {
        name: 'Playnext',
        icon: <Playnext />,
      },
      {
        name: 'Rewind',
        icon: <Rewind />,
      },
      {
        name: 'Fastforward',
        icon: <Fastforward />,
      },
      {
        name: 'Stopalt',
        icon: <Stopalt />,
      },
      {
        name: 'Sidebyside',
        icon: <Sidebyside />,
      },
      {
        name: 'Stacked',
        icon: <Stacked />,
      },
      {
        name: 'Sun',
        icon: <Sun />,
      },
      {
        name: 'Moon',
        icon: <Moon />,
      },
    ],
  },
  {
    name: 'Documents',
    icons: [
      {
        name: 'Book',
        icon: <Book />,
      },
      {
        name: 'Document',
        icon: <Document />,
      },
      {
        name: 'Copy',
        icon: <Copy />,
      },
      {
        name: 'Category',
        icon: <Category />,
      },
      {
        name: 'Folder',
        icon: <Folder />,
      },
      {
        name: 'Print',
        icon: <Print />,
      },
      {
        name: 'Graphline',
        icon: <Graphline />,
      },
      {
        name: 'Calendar',
        icon: <Calendar />,
      },
      {
        name: 'Graphbar',
        icon: <Graphbar />,
      },
      {
        name: 'Menu',
        icon: <Menu />,
      },
      {
        name: 'Menureverse',
        icon: <Menureverse />,
      },
      {
        name: 'Filter',
        icon: <Filter />,
      },
      {
        name: 'Docchart',
        icon: <Docchart />,
      },
      {
        name: 'Doclist',
        icon: <Doclist />,
      },
    ],
  },
  {
    name: 'Editing',
    icons: [
      {
        name: 'Markup',
        icon: <Markup />,
      },
      {
        name: 'Bold',
        icon: <Bold />,
      },
      {
        name: 'Italic',
        icon: <Italic />,
      },
      {
        name: 'Paperclip',
        icon: <Paperclip />,
      },
      {
        name: 'Listordered',
        icon: <Listordered />,
      },
      {
        name: 'Listunordered',
        icon: <Listunordered />,
      },
      {
        name: 'Paragraph',
        icon: <Paragraph />,
      },
      {
        name: 'Markdown',
        icon: <Markdown />,
      },
    ],
  },
  {
    name: 'Git',
    icons: [
      {
        name: 'Repo',
        icon: <Repo />,
      },
      {
        name: 'Commit',
        icon: <Commit />,
      },
      {
        name: 'Branch',
        icon: <Branch />,
      },
      {
        name: 'Pullrequest',
        icon: <Pullrequest />,
      },
      {
        name: 'Merge',
        icon: <Merge />,
      },
    ],
  },
  {
    name: 'OS',
    icons: [
      {
        name: 'Apple',
        icon: <Apple />,
      },
      {
        name: 'Linux',
        icon: <Linux />,
      },
      {
        name: 'Ubuntu',
        icon: <Ubuntu />,
      },
      {
        name: 'Windows',
        icon: <Windows />,
      },
      {
        name: 'Chrome',
        icon: <Chrome />,
      },
    ],
  },
  {
    name: 'Logos',
    icons: [
      {
        name: 'Storybook',
        icon: <Storybook />,
      },
      {
        name: 'Azuredevops',
        icon: <Azuredevops />,
      },
      {
        name: 'Bitbucket',
        icon: <Bitbucket />,
      },
      {
        name: 'Chromatic',
        icon: <Chromatic />,
      },
      {
        name: 'ComponentDriven',
        icon: <ComponentDriven />,
      },
      {
        name: 'Discord',
        icon: <Discord />,
      },
      {
        name: 'Facebook',
        icon: <Facebook />,
      },
      {
        name: 'Figma',
        icon: <Figma />,
      },
      {
        name: 'Gdrive',
        icon: <Gdrive />,
      },
      {
        name: 'Github',
        icon: <Github />,
      },
      {
        name: 'Gitlab',
        icon: <Gitlab />,
      },
      {
        name: 'Google',
        icon: <Google />,
      },
      {
        name: 'Graphql',
        icon: <Graphql />,
      },
      {
        name: 'Medium',
        icon: <Medium />,
      },
      {
        name: 'Redux',
        icon: <Redux />,
      },
      {
        name: 'Twitter',
        icon: <Twitter />,
      },
      {
        name: 'Youtube',
        icon: <Youtube />,
      },
      {
        name: 'VSCode',
        icon: <VSCode />,
      },
      {
        name: 'Linkedin',
        icon: <Linkedin />,
      },
    ],
  },
  {
    name: 'Devices',
    icons: [
      {
        name: 'Browser',
        icon: <Browser />,
      },
      {
        name: 'Tablet',
        icon: <Tablet />,
      },
      {
        name: 'Mobile',
        icon: <Mobile />,
      },
      {
        name: 'Watch',
        icon: <Watch />,
      },
      {
        name: 'Sidebar',
        icon: <Sidebar />,
      },
      {
        name: 'SidebarAlt',
        icon: <SidebarAlt />,
      },
      {
        name: 'Sidebaralttoggle',
        icon: <Sidebaralttoggle />,
      },
      {
        name: 'Sidebartoggle',
        icon: <Sidebartoggle />,
      },
      {
        name: 'Bottombar',
        icon: <Bottombar />,
      },
      {
        name: 'Bottombartoggle',
        icon: <Bottombartoggle />,
      },
      {
        name: 'Cpu',
        icon: <Cpu />,
      },
      {
        name: 'Database',
        icon: <Database />,
      },
      {
        name: 'Memory',
        icon: <Memory />,
      },
      {
        name: 'Structure',
        icon: <Structure />,
      },
      {
        name: 'Box',
        icon: <Box />,
      },
      {
        name: 'Power',
        icon: <Power />,
      },
    ],
  },
  {
    name: 'CRUD',
    icons: [
      {
        name: 'Edit',
        icon: <Edit />,
      },
      {
        name: 'Cog',
        icon: <Cog />,
      },
      {
        name: 'Nut',
        icon: <Nut />,
      },
      {
        name: 'Wrench',
        icon: <Wrench />,
      },
      {
        name: 'Ellipsis',
        icon: <Ellipsis />,
      },
      {
        name: 'Wand',
        icon: <Wand />,
      },
      {
        name: 'Check',
        icon: <Check />,
      },
      {
        name: 'Form',
        icon: <Form />,
      },
      {
        name: 'Batchdeny',
        icon: <Batchdeny />,
      },
      {
        name: 'Batchaccept',
        icon: <Batchaccept />,
      },
      {
        name: 'Controls',
        icon: <Controls />,
      },
      {
        name: 'Plus',
        icon: <Plus />,
      },
      {
        name: 'CloseAlt',
        icon: <CloseAlt />,
      },
      {
        name: 'Cross',
        icon: <Cross />,
      },
      {
        name: 'Trash',
        icon: <Trash />,
      },
      {
        name: 'Pinalt',
        icon: <Pinalt />,
      },
      {
        name: 'Unpin',
        icon: <Unpin />,
      },
      {
        name: 'Add',
        icon: <Add />,
      },
      {
        name: 'Subtract',
        icon: <Subtract />,
      },
      {
        name: 'Close',
        icon: <Close />,
      },
      {
        name: 'Delete',
        icon: <Delete />,
      },
      {
        name: 'Passed',
        icon: <Passed />,
      },
      {
        name: 'Changed',
        icon: <Changed />,
      },
      {
        name: 'Failed',
        icon: <Failed />,
      },
      {
        name: 'Clear',
        icon: <Clear />,
      },
      {
        name: 'Comment',
        icon: <Comment />,
      },
      {
        name: 'Commentadd',
        icon: <Commentadd />,
      },
      {
        name: 'Requestchange',
        icon: <Requestchange />,
      },
      {
        name: 'Comments',
        icon: <Comments />,
      },
      {
        name: 'Chat',
        icon: <Chat />,
      },
      {
        name: 'Lock',
        icon: <Lock />,
      },
      {
        name: 'Unlock',
        icon: <Unlock />,
      },
      {
        name: 'Key',
        icon: <Key />,
      },
      {
        name: 'Outbox',
        icon: <Outbox />,
      },
      {
        name: 'Credit',
        icon: <Credit />,
      },
      {
        name: 'Button',
        icon: <Button />,
      },
      {
        name: 'Type',
        icon: <Type />,
      },
      {
        name: 'Pointerdefault',
        icon: <Pointerdefault />,
      },
      {
        name: 'Pointerhand',
        icon: <Pointerhand />,
      },
      {
        name: 'Command',
        icon: <Command />,
      },
    ],
  },
  {
    name: 'Communicate',
    icons: [
      {
        name: 'Info',
        icon: <Info />,
      },
      {
        name: 'Question',
        icon: <Question />,
      },
      {
        name: 'Support',
        icon: <Support />,
      },
      {
        name: 'Alert',
        icon: <Alert />,
      },
      {
        name: 'Alertalt',
        icon: <Alertalt />,
      },
      {
        name: 'Email',
        icon: <Email />,
      },
      {
        name: 'Phone',
        icon: <Phone />,
      },
      {
        name: 'Link',
        icon: <Link />,
      },
      {
        name: 'Linkbroken',
        icon: <Linkbroken />,
      },
      {
        name: 'Bell',
        icon: <Bell />,
      },
      {
        name: 'Rss',
        icon: <Rss />,
      },
      {
        name: 'Sharealt',
        icon: <Sharealt />,
      },
      {
        name: 'Share',
        icon: <Share />,
      },
      {
        name: 'Jumpto',
        icon: <Jumpto />,
      },
      {
        name: 'Circlehollow',
        icon: <Circlehollow />,
      },
      {
        name: 'Circle',
        icon: <Circle />,
      },
      {
        name: 'Bookmarkhollow',
        icon: <Bookmarkhollow />,
      },
      {
        name: 'Bookmark',
        icon: <Bookmark />,
      },
      {
        name: 'Diamond',
        icon: <Diamond />,
      },
      {
        name: 'Hearthollow',
        icon: <Hearthollow />,
      },
      {
        name: 'Heart',
        icon: <Heart />,
      },
      {
        name: 'Starhollow',
        icon: <Starhollow />,
      },
      {
        name: 'Star',
        icon: <Star />,
      },
      {
        name: 'Certificate',
        icon: <Certificate />,
      },
      {
        name: 'Verified',
        icon: <Verified />,
      },
      {
        name: 'Thumbsup',
        icon: <Thumbsup />,
      },
      {
        name: 'Shield',
        icon: <Shield />,
      },
      {
        name: 'Basket',
        icon: <Basket />,
      },
      {
        name: 'Beaker',
        icon: <Beaker />,
      },
      {
        name: 'Hourglass',
        icon: <Hourglass />,
      },
      {
        name: 'Flag',
        icon: <Flag />,
      },
      {
        name: 'Cloudhollow',
        icon: <Cloudhollow />,
      },
      {
        name: 'Cloud',
        icon: <Cloud />,
      },
      {
        name: 'Sticker',
        icon: <Sticker />,
      },
    ],
  },
  {
    name: 'Wayfinding',
    icons: [
      {
        name: 'Arrowup',
        icon: <Arrowup />,
      },
      {
        name: 'Arrowdown',
        icon: <Arrowdown />,
      },
      {
        name: 'Arrowleft',
        icon: <Arrowleft />,
      },
      {
        name: 'Arrowright',
        icon: <Arrowright />,
      },
      {
        name: 'Arrowupalt',
        icon: <Arrowupalt />,
      },
      {
        name: 'Arrowdownalt',
        icon: <Arrowdownalt />,
      },
      {
        name: 'Arrowleftalt',
        icon: <Arrowleftalt />,
      },
      {
        name: 'Arrowrightalt',
        icon: <Arrowrightalt />,
      },
      {
        name: 'ExpandAlt',
        icon: <ExpandAlt />,
      },
      {
        name: 'Collapse',
        icon: <Collapse />,
      },
      {
        name: 'Expand',
        icon: <Expand />,
      },
      {
        name: 'Unfold',
        icon: <Unfold />,
      },
      {
        name: 'Transfer',
        icon: <Transfer />,
      },
      {
        name: 'Redirect',
        icon: <Redirect />,
      },
      {
        name: 'Undo',
        icon: <Undo />,
      },
      {
        name: 'Reply',
        icon: <Reply />,
      },
      {
        name: 'Sync',
        icon: <Sync />,
      },
      {
        name: 'Upload',
        icon: <Upload />,
      },
      {
        name: 'Download',
        icon: <Download />,
      },
      {
        name: 'Back',
        icon: <Back />,
      },
      {
        name: 'Proceed',
        icon: <Proceed />,
      },
      {
        name: 'Refresh',
        icon: <Refresh />,
      },
      {
        name: 'Globe',
        icon: <Globe />,
      },
      {
        name: 'Compass',
        icon: <Compass />,
      },
      {
        name: 'Location',
        icon: <Location />,
      },
      {
        name: 'Pin',
        icon: <Pin />,
      },
      {
        name: 'Time',
        icon: <Time />,
      },
      {
        name: 'Dashboard',
        icon: <Dashboard />,
      },
      {
        name: 'Timer',
        icon: <Timer />,
      },
      {
        name: 'Home',
        icon: <Home />,
      },
      {
        name: 'Admin',
        icon: <Admin />,
      },
      {
        name: 'Direction',
        icon: <Direction />,
      },
    ],
  },
  {
    name: 'People',
    icons: [
      {
        name: 'User',
        icon: <User />,
      },
      {
        name: 'Useralt',
        icon: <Useralt />,
      },
      {
        name: 'Useradd',
        icon: <Useradd />,
      },
      {
        name: 'Users',
        icon: <Users />,
      },
      {
        name: 'Profile',
        icon: <Profile />,
      },
      {
        name: 'Facehappy',
        icon: <Facehappy />,
      },
      {
        name: 'Faceneutral',
        icon: <Faceneutral />,
      },
      {
        name: 'Facesad',
        icon: <Facesad />,
      },
      {
        name: 'Accessibility',
        icon: <Accessibility />,
      },
      {
        name: 'AccessibilityAlt',
        icon: <AccessibilityAlt />,
      },
    ],
  },
];
