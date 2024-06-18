const fs = require('fs');
//============================================
const videoLandcsapePath = './Video/v2.mp4';
const videoPortraitPath = './Video/v1.mp4';
//============================================
const videoLandscape = fs.readFileSync(videoLandcsapePath);
const videoPortrait = fs.readFileSync(videoPortraitPath);
//============================================
const base64_video_landscape = videoLandscape.toString('base64');
const base64_video_portrait = videoPortrait.toString('base64');
//============================================
const dataHtml = fs.readFileSync('./playable_video_template.html', { encoding: 'utf8', flag: 'r' });
//============================================
const replaceBase64Video = dataHtml
    .replace('@@base_64_video_landscape@@', `data:video/mp4;base64,${base64_video_landscape}`)
    .replace('@@base_64_video_portrait@@', `data:video/mp4;base64,${base64_video_portrait}`);
//============================================
fs.writeFileSync(`./Build/playable_video_${Date.now()}.html`, replaceBase64Video);