import {BrowserRouter} from 'react-router-dom';

const createRouteComponent = (component: JSX.Element) => (
  <BrowserRouter>
    {component}
  </BrowserRouter>
);

export { createRouteComponent };
