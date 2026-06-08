const fs = require('fs');
const path = require('path');
const express = require('express');

const originalStatic = express.static.bind(express);

function injectBeforeHeadClose(html, tag) {
    if (html.includes(tag)) return html;
    return html.replace('</head>', `    ${tag}\n</head>`);
}

function sendFileWithType(res, filePath, type, transform) {
    fs.readFile(filePath, 'utf8', (error, content) => {
        if (error) {
            res.status(404).end();
            return;
        }
        res.type(type).send(transform ? transform(content) : content);
    });
}

express.static = function patchedStatic(root, options) {
    const staticMiddleware = originalStatic(root, options);
    const fitCssPath = path.join(root, 'viewport-fit.css');
    const torneoFitCssPath = path.join(root, 'modes', 'torneo-viewport-fit.css');
    const torneoCssPaths = new Set([
        '/modes/torneo-selecciones/styles.css',
        '/modes/torneo-clubes/styles.css',
    ]);

    return function viewportFitMiddleware(req, res, next) {
        const urlPath = req.path || req.url.split('?')[0];

        if (urlPath === '/' || urlPath === '/index.html') {
            const indexPath = path.join(root, 'index.html');
            sendFileWithType(res, indexPath, 'html', (html) => (
                injectBeforeHeadClose(html, '<link rel="stylesheet" href="/viewport-fit.css">')
            ));
            return;
        }

        if (torneoCssPaths.has(urlPath)) {
            const originalCssPath = path.join(root, urlPath.replace(/^\//, ''));
            sendFileWithType(res, originalCssPath, 'css', (css) => {
                let fitCss = '';
                try {
                    fitCss = fs.readFileSync(torneoFitCssPath, 'utf8');
                } catch (error) {
                    fitCss = '';
                }
                return `${css}\n\n${fitCss}`;
            });
            return;
        }

        if (urlPath === '/viewport-fit.css') {
            sendFileWithType(res, fitCssPath, 'css');
            return;
        }

        if (urlPath === '/modes/torneo-viewport-fit.css') {
            sendFileWithType(res, torneoFitCssPath, 'css');
            return;
        }

        staticMiddleware(req, res, next);
    };
};
