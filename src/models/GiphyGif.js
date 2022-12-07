export class GiphyGif {
    constructor(data) {
        this.url = data.images.original.url
        this.images = data.images
    }
}