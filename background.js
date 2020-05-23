function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

c = getElementByXpath('//*[@id="sidebar"]/div[6]/div[4]');
v = getElementByXpath('//*[@id="sidebar"]/div[5]/div[4]');


mod=null
if (c == null && v != null)
{
    //v is the box we want
    mod = v;
}
if (c != null && v != null)
{
    //c is the box we want
    mod = c;
}

if (mod != null)
{
    var b = document.createElement("BUTTON");
    b.innerHTML="Toggle Tags";
    b.onclick = () => {
        var subs = mod.getElementsByClassName('roundbox');
        for (var i = 0; i < subs.length; i++) {
            var a = subs[i];
            if (a.style.display == 'block')
                a.style.display = 'none';
            else a.style.display = 'block';
        }
    }
    mod.appendChild(b);
    var subs = mod.getElementsByClassName('roundbox');
    for (var i = 0; i < subs.length; i++) {
        var a = subs[i];
        console.log(a);
        a.style.display = 'none';
    }
}

