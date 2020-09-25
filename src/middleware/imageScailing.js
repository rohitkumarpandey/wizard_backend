const sharp = require('sharp');



module.exports = function(request, response, next){
    const base64Image = request.body.image;
    let parts = base64Image.split(';');
    let mimType = parts[0].split(':')[1];
    let imageData = parts[1].split(',')[1];

    var img = Buffer.from(base64Image.split(';base64,').pop(), 'base64');

    sharp(img).resize(64, 64)
    .toBuffer()
    .then(resizedImageBuffer =>{
        let resizedImageData = resizedImageBuffer.toString('base64');
        let resizedBased64 = 'data:${mimType};base64,${resizedImageData}';
        request.body.profilePic = resizedBased64;
    }).catch(error=>{
        console.log(error);
    })
    next();
}

 