export default class ServiceModel {
    public title: string;
    public description: string;
    public imageSrc: string;
    public imageAlt: string;
    constructor(title: string, description: string, imageSrc: string, imageAlt: string | null = null) {
        this.title = title;
        this.description = description;
        this.imageSrc = imageSrc;
        this.imageAlt = imageAlt ?? imageSrc;
    }
}