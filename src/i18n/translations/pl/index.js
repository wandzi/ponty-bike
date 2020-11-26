import flatten from 'flat';

import error404 from './404';
import home from './home';
import Models from './models';

const messages = { home, Models, error404 };

export default flatten(messages);
