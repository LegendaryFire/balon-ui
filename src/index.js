import './index.css';

import Content from './components/Content';
import Row from './components/Row';
import Button from './components/Button';
import { Card, CardHeader, CardBody, CardFooter } from './components/Card';
import Overlay from './components/Overlay';
import Sidebar from './components/Sidebar';

class Balon {
    static Content = Content;
    static Row = Row;
    static Button = Button;
    static Card = Card;
    static CardHeader = CardHeader;
    static CardBody = CardBody;
    static CardFooter = CardFooter;
    static Overlay = Overlay;
    static Sidebar = Sidebar;
}

document.addEventListener('DOMContentLoaded', () => {
    customElements.define('x-content', Balon.Content);
    customElements.define('x-row', Balon.Row);
    customElements.define('x-button', Balon.Button);
    customElements.define('x-card', Balon.Card);
    customElements.define('x-overlay', Balon.Overlay);
    customElements.define('x-sidebar', Balon.Sidebar);
});