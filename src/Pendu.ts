class Pendu {
  static publicImagePath = "./assets/images/pendu/";
  private imgHtml: HTMLImageElement;
  private step: number = 0;
  private images = [
    "image1x1.png",
    "image2x1.png",
    "image3x1.png",
    "image4x1.png",
    "image5x1.png",
    "image6x1.png",
    "image7x1.png",
  ];

  constructor(imgHtml: HTMLImageElement) {
    this.imgHtml = imgHtml;
    this.updateImage();
  }

  private updateImage() {
    this.imgHtml.src = `${Pendu.publicImagePath}${this.images[this.step]}`;
  }

  nextStep() {
    this.step++;
    this.updateImage();
  }
}

export default Pendu;
