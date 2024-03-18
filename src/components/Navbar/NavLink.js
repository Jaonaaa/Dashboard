import BellIcon from "../../assets/svg/BellIcon";
import HomeIcon from "../../assets/svg/HomeIcon";
import OverviewIcon from "../../assets/svg/OverviewIcon";

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
      },
      {
        type: "link_info",
        linkTo: "/validation",
        label: "Validation",
        icon: <OverviewIcon />,
        info: "",
      },
      {
        type: "link_list",
        label: "Add ",
        icon: <BellIcon />,
        sublinks: [
          {
            label: "Artistic Gender",
            linkTo: "/add/artistic_gender",
          },
          {
            label: "Artwork Type",
            linkTo: "/add/artwork_type",
          },
          {
            label: "Category",
            linkTo: "/add/category",
          },
          {
            label: "Colors and Palette",
            linkTo: "/add/colors",
          },
        ],
      },
      {
        type: "link_list",
        label: "Exposition",
        icon: <BellIcon />,
        sublinks: [
          {
            label: "List",
            linkTo: "/expo/list",
          },
          {
            label: "Add",
            linkTo: "/expo/add",
          },
          {
            label: "Add Subject",
            linkTo: "/expo/add_subject",
          },
        ],
      },
    ],
  },
];

export const link_to_hide_nav = [];

export default linksNavData;
