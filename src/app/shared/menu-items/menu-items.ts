import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}
export interface Saperator {
  name: string;
  type?: string;
}
export interface SubChildren {
  state: string;
  name: string;
  type?: string;
}
export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
  child?: SubChildren[];
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  saperator?: Saperator[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: 'starter',
    name: 'Starter Page',
    type: 'link',
    icon: 'content_copy'
  },
  {
    state: 'starter',
    name: 'Menu',
    type: 'sub',
    icon: 'bubble_chart',
    badge: [{ type: 'red', value: '17' }],
    children: [
      { state: 'endpoint', name: 'POST EndPoint', type: 'link' },
      { state: 'getendpoint', name: 'GET EndPoint', type: 'link' },
      { state: 'user', name: 'List User', type: 'link' },
      
    ]
  }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
