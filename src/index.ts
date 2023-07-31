import { lazy } from 'react';
import { withSuspense } from './utils/withSuspense';

export const Photo = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Photo };
}));
export const Component = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Component };
}));
export const Grid = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Grid };
}));
export const Outline = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Outline };
}));
export const PhotoDrag = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.PhotoDrag };
}));
export const Gridalt = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Gridalt };
}));
export const Search = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Search };
}));
export const Zoom = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Zoom };
}));
export const Zoomout = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Zoomout };
}));
export const Zoomreset = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Zoomreset };
}));
export const Eye = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Eye };
}));
export const Eyeclose = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Eyeclose };
}));
export const Lightning = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Lightning };
}));
export const Lightningoff = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Lightningoff };
}));
export const Contrast = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Contrast };
}));
export const Switchalt = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Switchalt };
}));
export const Mirror = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Mirror };
}));
export const Grow = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Grow };
}));
export const Paintbrush = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Paintbrush };
}));
export const Ruler = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Ruler };
}));
export const Stop = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Stop };
}));
export const Camera = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Camera };
}));
export const Video = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Video };
}));
export const Speaker = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Speaker };
}));
export const Play = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Play };
}));
export const Playback = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Playback };
}));
export const Playnext = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Playnext };
}));
export const Rewind = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Rewind };
}));
export const Fastforward = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Fastforward };
}));
export const Stopalt = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Stopalt };
}));
export const Sidebyside = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Sidebyside };
}));
export const Stacked = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Stacked };
}));
export const Sun = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Sun };
}));
export const Moon = withSuspense(lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Moon };
}));
export const Book = withSuspense(lazy(async () => {
  const m = await import('./groups/Documents');
  return { default: m.Book };
}));
export const Document = withSuspense(lazy(async () => {
  const m = await import('./groups/Documents');
  return { default: m.Document };
}));
export const Copy = withSuspense(lazy(async () => {
  const m = await import('./groups/Documents');
  return { default: m.Copy };
}));
export const Category = withSuspense(lazy(async () => {
  const m = await import('./groups/Documents');
  return { default: m.Category };
}));
export const Folder = withSuspense(lazy(async () => {
  const m = await import('./groups/Documents');
  return { default: m.Folder };
}));
export const Print = withSuspense(lazy(async () => {
  const m = await import('./groups/Documents');
  return { default: m.Print };
}));
export const Graphline = withSuspense(lazy(async () => {
  const m = await import('./groups/Documents');
  return { default: m.Graphline };
}));
export const Calendar = withSuspense(lazy(async () => {
  const m = await import('./groups/Documents');
  return { default: m.Calendar };
}));
export const Graphbar = withSuspense(lazy(async () => {
  const m = await import('./groups/Documents');
  return { default: m.Graphbar };
}));
export const Menu = withSuspense(lazy(async () => {
  const m = await import('./groups/Documents');
  return { default: m.Menu };
}));
export const Menureverse = withSuspense(lazy(async () => {
  const m = await import('./groups/Documents');
  return { default: m.Menureverse };
}));
export const Filter = withSuspense(lazy(async () => {
  const m = await import('./groups/Documents');
  return { default: m.Filter };
}));
export const Docchart = withSuspense(lazy(async () => {
  const m = await import('./groups/Documents');
  return { default: m.Docchart };
}));
export const Doclist = withSuspense(lazy(async () => {
  const m = await import('./groups/Documents');
  return { default: m.Doclist };
}));
export const Markup = withSuspense(lazy(async () => {
  const m = await import('./groups/Editing');
  return { default: m.Markup };
}));
export const Bold = withSuspense(lazy(async () => {
  const m = await import('./groups/Editing');
  return { default: m.Bold };
}));
export const Italic = withSuspense(lazy(async () => {
  const m = await import('./groups/Editing');
  return { default: m.Italic };
}));
export const Paperclip = withSuspense(lazy(async () => {
  const m = await import('./groups/Editing');
  return { default: m.Paperclip };
}));
export const Listordered = withSuspense(lazy(async () => {
  const m = await import('./groups/Editing');
  return { default: m.Listordered };
}));
export const Listunordered = withSuspense(lazy(async () => {
  const m = await import('./groups/Editing');
  return { default: m.Listunordered };
}));
export const Paragraph = withSuspense(lazy(async () => {
  const m = await import('./groups/Editing');
  return { default: m.Paragraph };
}));
export const Markdown = withSuspense(lazy(async () => {
  const m = await import('./groups/Editing');
  return { default: m.Markdown };
}));
export const Repo = withSuspense(lazy(async () => {
  const m = await import('./groups/Git');
  return { default: m.Repo };
}));
export const Commit = withSuspense(lazy(async () => {
  const m = await import('./groups/Git');
  return { default: m.Commit };
}));
export const Branch = withSuspense(lazy(async () => {
  const m = await import('./groups/Git');
  return { default: m.Branch };
}));
export const Pullrequest = withSuspense(lazy(async () => {
  const m = await import('./groups/Git');
  return { default: m.Pullrequest };
}));
export const Merge = withSuspense(lazy(async () => {
  const m = await import('./groups/Git');
  return { default: m.Merge };
}));
export const Apple = withSuspense(lazy(async () => {
  const m = await import('./groups/OS');
  return { default: m.Apple };
}));
export const Linux = withSuspense(lazy(async () => {
  const m = await import('./groups/OS');
  return { default: m.Linux };
}));
export const Ubuntu = withSuspense(lazy(async () => {
  const m = await import('./groups/OS');
  return { default: m.Ubuntu };
}));
export const Windows = withSuspense(lazy(async () => {
  const m = await import('./groups/OS');
  return { default: m.Windows };
}));
export const Chrome = withSuspense(lazy(async () => {
  const m = await import('./groups/OS');
  return { default: m.Chrome };
}));
export const Storybook = withSuspense(lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Storybook };
}));
export const Azuredevops = withSuspense(lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Azuredevops };
}));
export const Bitbucket = withSuspense(lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Bitbucket };
}));
export const Chromatic = withSuspense(lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Chromatic };
}));
export const ComponentDriven = withSuspense(lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.ComponentDriven };
}));
export const Discord = withSuspense(lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Discord };
}));
export const Facebook = withSuspense(lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Facebook };
}));
export const Figma = withSuspense(lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Figma };
}));
export const Gdrive = withSuspense(lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Gdrive };
}));
export const Github = withSuspense(lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Github };
}));
export const Gitlab = withSuspense(lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Gitlab };
}));
export const Google = withSuspense(lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Google };
}));
export const Graphql = withSuspense(lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Graphql };
}));
export const Medium = withSuspense(lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Medium };
}));
export const Redux = withSuspense(lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Redux };
}));
export const Twitter = withSuspense(lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Twitter };
}));
export const Youtube = withSuspense(lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Youtube };
}));
export const VSCode = withSuspense(lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.VSCode };
}));
export const Linkedin = withSuspense(lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Linkedin };
}));
export const Browser = withSuspense(lazy(async () => {
  const m = await import('./groups/Devices');
  return { default: m.Browser };
}));
export const Tablet = withSuspense(lazy(async () => {
  const m = await import('./groups/Devices');
  return { default: m.Tablet };
}));
export const Mobile = withSuspense(lazy(async () => {
  const m = await import('./groups/Devices');
  return { default: m.Mobile };
}));
export const Watch = withSuspense(lazy(async () => {
  const m = await import('./groups/Devices');
  return { default: m.Watch };
}));
export const Sidebar = withSuspense(lazy(async () => {
  const m = await import('./groups/Devices');
  return { default: m.Sidebar };
}));
export const SidebarAlt = withSuspense(lazy(async () => {
  const m = await import('./groups/Devices');
  return { default: m.SidebarAlt };
}));
export const Sidebaralttoggle = withSuspense(lazy(async () => {
  const m = await import('./groups/Devices');
  return { default: m.Sidebaralttoggle };
}));
export const Sidebartoggle = withSuspense(lazy(async () => {
  const m = await import('./groups/Devices');
  return { default: m.Sidebartoggle };
}));
export const Bottombar = withSuspense(lazy(async () => {
  const m = await import('./groups/Devices');
  return { default: m.Bottombar };
}));
export const Bottombartoggle = withSuspense(lazy(async () => {
  const m = await import('./groups/Devices');
  return { default: m.Bottombartoggle };
}));
export const Cpu = withSuspense(lazy(async () => {
  const m = await import('./groups/Devices');
  return { default: m.Cpu };
}));
export const Database = withSuspense(lazy(async () => {
  const m = await import('./groups/Devices');
  return { default: m.Database };
}));
export const Memory = withSuspense(lazy(async () => {
  const m = await import('./groups/Devices');
  return { default: m.Memory };
}));
export const Structure = withSuspense(lazy(async () => {
  const m = await import('./groups/Devices');
  return { default: m.Structure };
}));
export const Box = withSuspense(lazy(async () => {
  const m = await import('./groups/Devices');
  return { default: m.Box };
}));
export const Power = withSuspense(lazy(async () => {
  const m = await import('./groups/Devices');
  return { default: m.Power };
}));
export const Edit = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Edit };
}));
export const Cog = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Cog };
}));
export const Nut = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Nut };
}));
export const Wrench = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Wrench };
}));
export const Ellipsis = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Ellipsis };
}));
export const Wand = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Wand };
}));
export const Check = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Check };
}));
export const Form = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Form };
}));
export const Batchdeny = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Batchdeny };
}));
export const Batchaccept = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Batchaccept };
}));
export const Controls = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Controls };
}));
export const Plus = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Plus };
}));
export const CloseAlt = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.CloseAlt };
}));
export const Cross = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Cross };
}));
export const Trash = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Trash };
}));
export const Pinalt = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Pinalt };
}));
export const Unpin = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Unpin };
}));
export const Add = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Add };
}));
export const Subtract = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Subtract };
}));
export const Close = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Close };
}));
export const Delete = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Delete };
}));
export const Passed = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Passed };
}));
export const Changed = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Changed };
}));
export const Failed = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Failed };
}));
export const Clear = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Clear };
}));
export const Comment = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Comment };
}));
export const Commentadd = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Commentadd };
}));
export const Requestchange = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Requestchange };
}));
export const Comments = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Comments };
}));
export const Chat = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Chat };
}));
export const Lock = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Lock };
}));
export const Unlock = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Unlock };
}));
export const Key = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Key };
}));
export const Outbox = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Outbox };
}));
export const Credit = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Credit };
}));
export const Button = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Button };
}));
export const Type = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Type };
}));
export const Pointerdefault = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Pointerdefault };
}));
export const Pointerhand = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Pointerhand };
}));
export const Command = withSuspense(lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Command };
}));
export const Info = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Info };
}));
export const Question = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Question };
}));
export const Support = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Support };
}));
export const Alert = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Alert };
}));
export const Alertalt = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Alertalt };
}));
export const Email = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Email };
}));
export const Phone = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Phone };
}));
export const Link = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Link };
}));
export const Linkbroken = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Linkbroken };
}));
export const Bell = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Bell };
}));
export const Rss = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Rss };
}));
export const Sharealt = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Sharealt };
}));
export const Share = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Share };
}));
export const Jumpto = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Jumpto };
}));
export const Circlehollow = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Circlehollow };
}));
export const Circle = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Circle };
}));
export const Bookmarkhollow = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Bookmarkhollow };
}));
export const Bookmark = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Bookmark };
}));
export const Diamond = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Diamond };
}));
export const Hearthollow = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Hearthollow };
}));
export const Heart = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Heart };
}));
export const Starhollow = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Starhollow };
}));
export const Star = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Star };
}));
export const Certificate = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Certificate };
}));
export const Verified = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Verified };
}));
export const Thumbsup = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Thumbsup };
}));
export const Shield = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Shield };
}));
export const Basket = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Basket };
}));
export const Beaker = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Beaker };
}));
export const Hourglass = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Hourglass };
}));
export const Flag = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Flag };
}));
export const Cloudhollow = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Cloudhollow };
}));
export const Cloud = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Cloud };
}));
export const Sticker = withSuspense(lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Sticker };
}));
export const ChevronUp = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.ChevronUp };
}));
export const ChevronDown = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.ChevronDown };
}));
export const ChevronLeft = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.ChevronLeft };
}));
export const ChevronRight = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.ChevronRight };
}));
export const ArrowUp = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.ArrowUp };
}));
export const ArrowDown = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.ArrowDown };
}));
export const ArrowLeft = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.ArrowLeft };
}));
export const ArrowRight = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.ArrowRight };
}));
export const ArrowSolidUp = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.ArrowSolidUp };
}));
export const ArrowSolidDown = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.ArrowSolidDown };
}));
export const ArrowSolidLeft = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.ArrowSolidLeft };
}));
export const ArrowSolidRight = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.ArrowSolidRight };
}));
export const ExpandAlt = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.ExpandAlt };
}));
export const Collapse = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Collapse };
}));
export const Expand = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Expand };
}));
export const Unfold = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Unfold };
}));
export const Transfer = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Transfer };
}));
export const Redirect = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Redirect };
}));
export const Undo = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Undo };
}));
export const Reply = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Reply };
}));
export const Sync = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Sync };
}));
export const Upload = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Upload };
}));
export const Download = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Download };
}));
export const Back = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Back };
}));
export const Proceed = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Proceed };
}));
export const Refresh = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Refresh };
}));
export const Globe = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Globe };
}));
export const Compass = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Compass };
}));
export const Location = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Location };
}));
export const Pin = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Pin };
}));
export const Time = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Time };
}));
export const Dashboard = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Dashboard };
}));
export const Timer = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Timer };
}));
export const Home = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Home };
}));
export const Admin = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Admin };
}));
export const Direction = withSuspense(lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Direction };
}));
export const User = withSuspense(lazy(async () => {
  const m = await import('./groups/People');
  return { default: m.User };
}));
export const Useralt = withSuspense(lazy(async () => {
  const m = await import('./groups/People');
  return { default: m.Useralt };
}));
export const Useradd = withSuspense(lazy(async () => {
  const m = await import('./groups/People');
  return { default: m.Useradd };
}));
export const Users = withSuspense(lazy(async () => {
  const m = await import('./groups/People');
  return { default: m.Users };
}));
export const Profile = withSuspense(lazy(async () => {
  const m = await import('./groups/People');
  return { default: m.Profile };
}));
export const Facehappy = withSuspense(lazy(async () => {
  const m = await import('./groups/People');
  return { default: m.Facehappy };
}));
export const Faceneutral = withSuspense(lazy(async () => {
  const m = await import('./groups/People');
  return { default: m.Faceneutral };
}));
export const Facesad = withSuspense(lazy(async () => {
  const m = await import('./groups/People');
  return { default: m.Facesad };
}));
export const Accessibility = withSuspense(lazy(async () => {
  const m = await import('./groups/People');
  return { default: m.Accessibility };
}));
export const AccessibilityAlt = withSuspense(lazy(async () => {
  const m = await import('./groups/People');
  return { default: m.AccessibilityAlt };
}));
