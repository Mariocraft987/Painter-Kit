
function loadHome() {
    var content;
    content = '<h2>Paint-Kit</h2><br/><p>Paint-kit is a css stylizer, with our css files you can give your website a colorful look</p><h5>Just import the css files</h5>';

    content += '<p class="console-box">&lt;link rel="stylesheet" href="https://mariocraft987/Painter-Kit/painter-kit.positioning.css"&gt; <br/>';
    content += '&lt;link rel="stylesheet" href="https://mariocraft987/Painter-Kit/painter-kit.buttons.css"&gt <br/> &lt;link rel="stylesheet" href="https://mariocraft987/Painter-Kit/painter-kit.15.css"&gt;<p>';

    content += '<p>And have a stylish page</p>';
    document.getElementById('page').innerHTML = content;
}