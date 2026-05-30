import './index.css';

import Button from './components/Button';
import Card from './components/Card';
import Overlay from './components/Overlay';
import Sidebar from './components/Sidebar';

class Balon {
    static Button = Button;
    static Card = Card;
    static Overlay = Overlay;
    static Sidebar = Sidebar;
}

customElements.define('x-button', Balon.Button, { extends: 'button' });
customElements.define('x-card', Balon.Card);
customElements.define('x-overlay', Balon.Overlay, { extends: 'div' });
customElements.define('x-sidebar', Balon.Sidebar, { extends: 'div' });