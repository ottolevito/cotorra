<!doctype html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Simple HTML</title>
            <style>
                .callout {
                    border: solid 1px #ff0080;
                    margin: 2px 4px;
                    padding: 2px 6px;
} .code {
                    background: #ccc;
                    margin: 1px 2px;
                    padding: 1px 4px;
 The Document Object Model
| 259
font-family: monospace;
                }
            </style>
        </head>
        <body>
            <header>
                <h1>Simple HTML</h1>
            </header>
<div id="content">
<p>This is a <i>simple</i> HTML file.</p> <div class="callout">
                    <p>This is as fancy as we'll get!</p>
                </div>
<p>IDs (such as <span class="code">#content</span>) are unique (there can only be one per page).</p>
<p>Classes (such as <span class="code">.callout</span>) can be used on many elements.</p>
<div id="callout2" class="callout fancy">
<p>A single HTML element can have multiple classes.</p>
                </div>
            </div>
        </body>
    </html>