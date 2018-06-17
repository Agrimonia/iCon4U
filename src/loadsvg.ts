export function svgToBase64(svg, callback) {
  console.log('convert start');
  let href = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(svg)));
  let image = new Image();
  image.src = href;
  console.log(href);
  image.onload = () => {
    let canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    let context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);
    //svg转png的base64编码;
    let imgDataUri = canvas.toDataURL('image/png');
    console.log('convert success');
    callback.call(this, imgDataUri);
  };
}
