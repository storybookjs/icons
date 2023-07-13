import { lazy } from 'react';

export const Photo = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Photo };
});
export const Component = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Component };
});
export const Grid = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Grid };
});
export const Outline = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Outline };
});
export const PhotoDrag = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.PhotoDrag };
});
export const Gridalt = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Gridalt };
});
export const Search = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Search };
});
export const Zoom = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Zoom };
});
export const Zoomout = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Zoomout };
});
export const Zoomreset = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Zoomreset };
});
export const Eye = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Eye };
});
export const Eyeclose = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Eyeclose };
});
export const Lightning = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Lightning };
});
export const Lightningoff = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Lightningoff };
});
export const Contrast = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Contrast };
});
export const Switchalt = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Switchalt };
});
export const Mirror = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Mirror };
});
export const Grow = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Grow };
});
export const Paintbrush = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Paintbrush };
});
export const Ruler = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Ruler };
});
export const Stop = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Stop };
});
export const Camera = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Camera };
});
export const Video = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Video };
});
export const Speaker = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Speaker };
});
export const Play = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Play };
});
export const Playback = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Playback };
});
export const Playnext = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Playnext };
});
export const Rewind = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Rewind };
});
export const Fastforward = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Fastforward };
});
export const Stopalt = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Stopalt };
});
export const Sidebyside = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Sidebyside };
});
export const Stacked = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Stacked };
});
export const Sun = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Sun };
});
export const Moon = lazy(async () => {
  const m = await import('./groups/Images');
  return { default: m.Moon };
});
export const Book = lazy(async () => {
  const m = await import('./groups/Documents');
  return { default: m.Book };
});
export const Document = lazy(async () => {
  const m = await import('./groups/Documents');
  return { default: m.Document };
});
export const Copy = lazy(async () => {
  const m = await import('./groups/Documents');
  return { default: m.Copy };
});
export const Category = lazy(async () => {
  const m = await import('./groups/Documents');
  return { default: m.Category };
});
export const Folder = lazy(async () => {
  const m = await import('./groups/Documents');
  return { default: m.Folder };
});
export const Print = lazy(async () => {
  const m = await import('./groups/Documents');
  return { default: m.Print };
});
export const Graphline = lazy(async () => {
  const m = await import('./groups/Documents');
  return { default: m.Graphline };
});
export const Calendar = lazy(async () => {
  const m = await import('./groups/Documents');
  return { default: m.Calendar };
});
export const Graphbar = lazy(async () => {
  const m = await import('./groups/Documents');
  return { default: m.Graphbar };
});
export const Menu = lazy(async () => {
  const m = await import('./groups/Documents');
  return { default: m.Menu };
});
export const Menureverse = lazy(async () => {
  const m = await import('./groups/Documents');
  return { default: m.Menureverse };
});
export const Filter = lazy(async () => {
  const m = await import('./groups/Documents');
  return { default: m.Filter };
});
export const Docchart = lazy(async () => {
  const m = await import('./groups/Documents');
  return { default: m.Docchart };
});
export const Doclist = lazy(async () => {
  const m = await import('./groups/Documents');
  return { default: m.Doclist };
});
export const Markup = lazy(async () => {
  const m = await import('./groups/Editing');
  return { default: m.Markup };
});
export const Bold = lazy(async () => {
  const m = await import('./groups/Editing');
  return { default: m.Bold };
});
export const Italic = lazy(async () => {
  const m = await import('./groups/Editing');
  return { default: m.Italic };
});
export const Paperclip = lazy(async () => {
  const m = await import('./groups/Editing');
  return { default: m.Paperclip };
});
export const Listordered = lazy(async () => {
  const m = await import('./groups/Editing');
  return { default: m.Listordered };
});
export const Listunordered = lazy(async () => {
  const m = await import('./groups/Editing');
  return { default: m.Listunordered };
});
export const Paragraph = lazy(async () => {
  const m = await import('./groups/Editing');
  return { default: m.Paragraph };
});
export const Markdown = lazy(async () => {
  const m = await import('./groups/Editing');
  return { default: m.Markdown };
});
export const Repo = lazy(async () => {
  const m = await import('./groups/Git');
  return { default: m.Repo };
});
export const Commit = lazy(async () => {
  const m = await import('./groups/Git');
  return { default: m.Commit };
});
export const Branch = lazy(async () => {
  const m = await import('./groups/Git');
  return { default: m.Branch };
});
export const Pullrequest = lazy(async () => {
  const m = await import('./groups/Git');
  return { default: m.Pullrequest };
});
export const Merge = lazy(async () => {
  const m = await import('./groups/Git');
  return { default: m.Merge };
});
export const Apple = lazy(async () => {
  const m = await import('./groups/OS');
  return { default: m.Apple };
});
export const Linux = lazy(async () => {
  const m = await import('./groups/OS');
  return { default: m.Linux };
});
export const Ubuntu = lazy(async () => {
  const m = await import('./groups/OS');
  return { default: m.Ubuntu };
});
export const Windows = lazy(async () => {
  const m = await import('./groups/OS');
  return { default: m.Windows };
});
export const Chrome = lazy(async () => {
  const m = await import('./groups/OS');
  return { default: m.Chrome };
});
export const Storybook = lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Storybook };
});
export const Azuredevops = lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Azuredevops };
});
export const Bitbucket = lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Bitbucket };
});
export const Chromatic = lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Chromatic };
});
export const ComponentDriven = lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.ComponentDriven };
});
export const Discord = lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Discord };
});
export const Facebook = lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Facebook };
});
export const Figma = lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Figma };
});
export const Gdrive = lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Gdrive };
});
export const Github = lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Github };
});
export const Gitlab = lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Gitlab };
});
export const Google = lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Google };
});
export const Graphql = lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Graphql };
});
export const Medium = lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Medium };
});
export const Redux = lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Redux };
});
export const Twitter = lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Twitter };
});
export const Youtube = lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Youtube };
});
export const VSCode = lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.VSCode };
});
export const Linkedin = lazy(async () => {
  const m = await import('./groups/Logos');
  return { default: m.Linkedin };
});
export const Browser = lazy(async () => {
  const m = await import('./groups/Devices');
  return { default: m.Browser };
});
export const Tablet = lazy(async () => {
  const m = await import('./groups/Devices');
  return { default: m.Tablet };
});
export const Mobile = lazy(async () => {
  const m = await import('./groups/Devices');
  return { default: m.Mobile };
});
export const Watch = lazy(async () => {
  const m = await import('./groups/Devices');
  return { default: m.Watch };
});
export const Sidebar = lazy(async () => {
  const m = await import('./groups/Devices');
  return { default: m.Sidebar };
});
export const SidebarAlt = lazy(async () => {
  const m = await import('./groups/Devices');
  return { default: m.SidebarAlt };
});
export const Sidebaralttoggle = lazy(async () => {
  const m = await import('./groups/Devices');
  return { default: m.Sidebaralttoggle };
});
export const Sidebartoggle = lazy(async () => {
  const m = await import('./groups/Devices');
  return { default: m.Sidebartoggle };
});
export const Bottombar = lazy(async () => {
  const m = await import('./groups/Devices');
  return { default: m.Bottombar };
});
export const Bottombartoggle = lazy(async () => {
  const m = await import('./groups/Devices');
  return { default: m.Bottombartoggle };
});
export const Cpu = lazy(async () => {
  const m = await import('./groups/Devices');
  return { default: m.Cpu };
});
export const Database = lazy(async () => {
  const m = await import('./groups/Devices');
  return { default: m.Database };
});
export const Memory = lazy(async () => {
  const m = await import('./groups/Devices');
  return { default: m.Memory };
});
export const Structure = lazy(async () => {
  const m = await import('./groups/Devices');
  return { default: m.Structure };
});
export const Box = lazy(async () => {
  const m = await import('./groups/Devices');
  return { default: m.Box };
});
export const Power = lazy(async () => {
  const m = await import('./groups/Devices');
  return { default: m.Power };
});
export const Edit = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Edit };
});
export const Cog = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Cog };
});
export const Nut = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Nut };
});
export const Wrench = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Wrench };
});
export const Ellipsis = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Ellipsis };
});
export const Wand = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Wand };
});
export const Check = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Check };
});
export const Form = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Form };
});
export const Batchdeny = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Batchdeny };
});
export const Batchaccept = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Batchaccept };
});
export const Controls = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Controls };
});
export const Plus = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Plus };
});
export const CloseAlt = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.CloseAlt };
});
export const Cross = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Cross };
});
export const Trash = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Trash };
});
export const Pinalt = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Pinalt };
});
export const Unpin = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Unpin };
});
export const Add = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Add };
});
export const Subtract = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Subtract };
});
export const Close = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Close };
});
export const Delete = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Delete };
});
export const Passed = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Passed };
});
export const Changed = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Changed };
});
export const Failed = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Failed };
});
export const Clear = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Clear };
});
export const Comment = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Comment };
});
export const Commentadd = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Commentadd };
});
export const Requestchange = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Requestchange };
});
export const Comments = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Comments };
});
export const Chat = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Chat };
});
export const Lock = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Lock };
});
export const Unlock = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Unlock };
});
export const Key = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Key };
});
export const Outbox = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Outbox };
});
export const Credit = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Credit };
});
export const Button = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Button };
});
export const Type = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Type };
});
export const Pointerdefault = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Pointerdefault };
});
export const Pointerhand = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Pointerhand };
});
export const Command = lazy(async () => {
  const m = await import('./groups/CRUD');
  return { default: m.Command };
});
export const Info = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Info };
});
export const Question = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Question };
});
export const Support = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Support };
});
export const Alert = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Alert };
});
export const Alertalt = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Alertalt };
});
export const Email = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Email };
});
export const Phone = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Phone };
});
export const Link = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Link };
});
export const Linkbroken = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Linkbroken };
});
export const Bell = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Bell };
});
export const Rss = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Rss };
});
export const Sharealt = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Sharealt };
});
export const Share = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Share };
});
export const Jumpto = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Jumpto };
});
export const Circlehollow = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Circlehollow };
});
export const Circle = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Circle };
});
export const Bookmarkhollow = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Bookmarkhollow };
});
export const Bookmark = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Bookmark };
});
export const Diamond = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Diamond };
});
export const Hearthollow = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Hearthollow };
});
export const Heart = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Heart };
});
export const Starhollow = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Starhollow };
});
export const Star = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Star };
});
export const Certificate = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Certificate };
});
export const Verified = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Verified };
});
export const Thumbsup = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Thumbsup };
});
export const Shield = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Shield };
});
export const Basket = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Basket };
});
export const Beaker = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Beaker };
});
export const Hourglass = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Hourglass };
});
export const Flag = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Flag };
});
export const Cloudhollow = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Cloudhollow };
});
export const Cloud = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Cloud };
});
export const Sticker = lazy(async () => {
  const m = await import('./groups/Communicate');
  return { default: m.Sticker };
});
export const Arrowup = lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Arrowup };
});
export const Arrowdown = lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Arrowdown };
});
export const Arrowleft = lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Arrowleft };
});
export const Arrowright = lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Arrowright };
});
export const Arrowupalt = lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Arrowupalt };
});
export const Arrowdownalt = lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Arrowdownalt };
});
export const Arrowleftalt = lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Arrowleftalt };
});
export const Arrowrightalt = lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Arrowrightalt };
});
export const ExpandAlt = lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.ExpandAlt };
});
export const Collapse = lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Collapse };
});
export const Expand = lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Expand };
});
export const Unfold = lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Unfold };
});
export const Transfer = lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Transfer };
});
export const Redirect = lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Redirect };
});
export const Undo = lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Undo };
});
export const Reply = lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Reply };
});
export const Sync = lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Sync };
});
export const Upload = lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Upload };
});
export const Download = lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Download };
});
export const Back = lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Back };
});
export const Proceed = lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Proceed };
});
export const Refresh = lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Refresh };
});
export const Globe = lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Globe };
});
export const Compass = lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Compass };
});
export const Location = lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Location };
});
export const Pin = lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Pin };
});
export const Time = lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Time };
});
export const Dashboard = lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Dashboard };
});
export const Timer = lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Timer };
});
export const Home = lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Home };
});
export const Admin = lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Admin };
});
export const Direction = lazy(async () => {
  const m = await import('./groups/Wayfinding');
  return { default: m.Direction };
});
export const User = lazy(async () => {
  const m = await import('./groups/People');
  return { default: m.User };
});
export const Useralt = lazy(async () => {
  const m = await import('./groups/People');
  return { default: m.Useralt };
});
export const Useradd = lazy(async () => {
  const m = await import('./groups/People');
  return { default: m.Useradd };
});
export const Users = lazy(async () => {
  const m = await import('./groups/People');
  return { default: m.Users };
});
export const Profile = lazy(async () => {
  const m = await import('./groups/People');
  return { default: m.Profile };
});
export const Facehappy = lazy(async () => {
  const m = await import('./groups/People');
  return { default: m.Facehappy };
});
export const Faceneutral = lazy(async () => {
  const m = await import('./groups/People');
  return { default: m.Faceneutral };
});
export const Facesad = lazy(async () => {
  const m = await import('./groups/People');
  return { default: m.Facesad };
});
export const Accessibility = lazy(async () => {
  const m = await import('./groups/People');
  return { default: m.Accessibility };
});
export const AccessibilityAlt = lazy(async () => {
  const m = await import('./groups/People');
  return { default: m.AccessibilityAlt };
});
