import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  slideIndex = 0;
  updateInterval = 10000;

  ngOnInit(): void {
    this.showSlides();
  }

  showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    let dots = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;

    for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove('fade'); // Remove the 'fade' class from all slides
    }

    this.slideIndex++;

    if (this.slideIndex > slides.length) {
      this.slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[this.slideIndex - 1].classList.add('fade'); // Add the 'fade' class to the current slide
    dots[this.slideIndex - 1].className += " active";

    setTimeout(() => this.showSlides(), this.updateInterval); // Change image every 2 seconds
  }
}