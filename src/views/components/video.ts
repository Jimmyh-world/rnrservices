import './../../css/modules/video.css';

import mp4 from './../../videos/video-2.mp4';

export default (): string => {
    return `
      <video id="video" loop muted autoplay>
        <source src="${mp4}" type="video/mp4" about="A music festival"></source>
      </video>
    `;
}