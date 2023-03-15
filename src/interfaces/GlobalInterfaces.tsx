interface MenuItem {
    item: String,
    path: string
}

export interface TabList {
    label: string,
    value: string,
    path?: string,
    menuItem?: MenuItem[]
}



export interface ColorBarProps {
    bgcolor?: string;
  }
  