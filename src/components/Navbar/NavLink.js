import ArchiveIcon from "../../assets/svg/ArchiveIcon";
import BellIcon from "../../assets/svg/BellIcon";
import ChatIcon from "../../assets/svg/ChatIcon";
import HomeIcon from "../../assets/svg/HomeIcon";
import OverviewIcon from "../../assets/svg/OverviewIcon";
import SettingsIcon from "../../assets/svg/SettingsIcon";
import ShopIcon from "../../assets/svg/ShopIcon";

//Aza adino le "/" aloha path rehetra
const linksNavData = [
  {
    type: "menu",
    menuLabel: "Dashboard",
    rows: [
      {
        type: "link",
        linkTo: "/",
        label: "Home",
        icon: <HomeIcon />,
      },
      {
        type: "link_info",
        linkTo: "/overview",
        label: "Overview",
        icon: <OverviewIcon />,
        info: 10,
      },
      {
        type: "link_list",
        label: "Notification",
        icon: <BellIcon />,
        sublinks: [
          {
            label: "Example 1",
            linkTo: "/Home/Test/example_1",
          },
          {
            label: "Example 2",
            linkTo: "/test/example_2",
          },
        ],
      },
    ],
  },
  {
    type: "menu",
    menuLabel: "Main menu",
    rows: [
      {
        type: "link",
        linkTo: "/something",
        label: "Something very long",
        icon: <ArchiveIcon />,
      },
      {
        type: "link_info",
        linkTo: "/chat",
        label: "Chat",
        icon: <ChatIcon />,
        info: 10,
      },
      {
        type: "link_list",
        label: "Shop",
        icon: <ShopIcon />,
        sublinks: [
          {
            label: "Example 11",
            linkTo: "/example_11",
          },
        ],
      },
    ],
  },
  {
    type: "single",
    row: {
      type: "link",
      linkTo: "/settings",
      label: "Settings",
      icon: <SettingsIcon />,
    },
  },
];

export const link_to_hide_nav = ["/settings", "/something", "/login"];

export default linksNavData;
