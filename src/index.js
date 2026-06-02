import './index.css';

import Content from './components/Content';
import Row from './components/Row';
import Button from './components/Button';
import { Card, CardHeader, CardBody, CardFooter } from './components/Card';
import Overlay from './components/Overlay';
import { Sidebar, SidebarHeader, SidebarBody, SidebarFooter } from './components/Sidebar';
import { Navbar, NavbarLogo, NavbarItem } from './components/Navbar';
import { Modal, ModalHeader } from './components/Modal';

export default class BalonUi {
    static Content = Content;
    static Row = Row;
    static Button = Button;
    static Card = Card;
    static CardHeader = CardHeader;
    static CardBody = CardBody;
    static CardFooter = CardFooter;
    static Overlay = Overlay;
    static Sidebar = Sidebar;
    static SidebarHeader = SidebarHeader;
    static SidebarBody = SidebarBody;
    static SidebarFooter = SidebarFooter;
    static Modal = Modal;
    static ModalHeader = ModalHeader;
    static Navbar = Navbar;
    static NavbarLogo = NavbarLogo;
    static NavbarItem = NavbarItem;
}

document.addEventListener('DOMContentLoaded', () => {
    customElements.define('x-content', BalonUi.Content);
    customElements.define('x-row', BalonUi.Row);
    customElements.define('x-button', BalonUi.Button);
    customElements.define('x-card', BalonUi.Card);
    customElements.define('x-card-header', BalonUi.CardHeader);
    customElements.define('x-card-body', BalonUi.CardBody);
    customElements.define('x-card-footer', BalonUi.CardFooter);
    customElements.define('x-overlay', BalonUi.Overlay);
    customElements.define('x-sidebar', BalonUi.Sidebar);
    customElements.define('x-sidebar-header', BalonUi.SidebarHeader);
    customElements.define('x-sidebar-body', BalonUi.SidebarBody);
    customElements.define('x-sidebar-footer', BalonUi.SidebarFooter);
    customElements.define('x-modal', BalonUi.Modal);
    customElements.define('x-modal-header', BalonUi.ModalHeader);
    customElements.define('x-navbar', BalonUi.Navbar);
    customElements.define('x-navbar-logo', BalonUi.NavbarLogo);
    customElements.define('x-navbar-item', BalonUi.NavbarItem);
});