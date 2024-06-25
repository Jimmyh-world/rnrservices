import './../../css/modules/video.css';

export default (): string => {
    return `
      <video id="video" loop muted autoplay>
        <source src="/videos/video-2.mp4" type="video/mp4" about="A music festival"></source>
      </video>
    `;
}