import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface IRoute {
  path?: string;
  element?: ReactNode;
  children?: IRoute[];
}
interface INavMenu {
  label?: ReactNode;
  icon?: ReactNode;
  key?: string;
  name?: string;
  path?: string;

  children?: INavMenu[];
}
interface IItem {
  name?: string;
  icon?: ReactNode;
  key?: string;
  path?: string;
  element?: ReactNode;
  children?: INavMenu[];
}

export const genereicRoutes = (items: IItem[]) => {
  const Routes: IRoute[] = items.reduce((acc: IRoute[], item: IRoute) => {
    acc.push({
      path: item?.path,
      element: item?.element,
    });

    if (item.children) {
      item.children.forEach((child) => {
        if (child.path && child.element) {
          acc.push({
            path: child?.path,
            element: child?.element,
          });
        }
      });
    }
    return acc;
  }, [] as IRoute[]);
  return Routes;
};

export const genericNavMenus = (items: INavMenu[], role: string) => {
  const Navmenu: INavMenu[] = items.reduce((acc, item) => {
    if (item.path && item.name) {
      acc.push({
        label: <NavLink to={`/${role}/${item?.path}`}>{item.name}</NavLink>,
        icon: item.icon,
        key: item.name,
      });
    }
    if (item.children) {
  
      acc.push({
        label: <NavLink to={`/${role}/${item?.path}`}>{item.name}</NavLink>,
        icon: item.icon,
        key: item.name,
        children: item.children.map((child) => ({
          label: <NavLink to={`/${role}/${child.path}`}> {child.name}</NavLink>,
          icon: child.icon,
          key: child.name,
        })),
      });
    }
    return acc;
  }, [] as INavMenu[]);
  return Navmenu;
};
