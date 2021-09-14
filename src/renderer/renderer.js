import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import routes from '../routes';

export default (request) => {
    const content = renderToString(
        <StaticRouter location={request.path}>
            <div>{renderRoutes(routes)}</div>
        </StaticRouter>,
    );
    return `
    <html>
      <body>
        <div id="root">${content}</div>
        <script src="./bundle.js"></script>
      </body>
    </html>
  `;
};
