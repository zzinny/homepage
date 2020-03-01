import React from 'react';
import './SlideShow.css';

class Slide extends React.Component {
    render() {
        return (
            <div className="mySlides fade" style={{display: this.props.display}}>
                <img src={this.props.image} />
            </div>
        );
    }
}

class SlideShow extends React.Component {
    slideLength = 3;
    slideImages = [
        "https://i.ytimg.com/vi/VvfF4nqH8dc/hqdefault.jpg",
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F06%2Fhyukoh-24-how-to-find-true-love-and-happiness-album-stream-0001.jpg?q=75&w=800&cbr=1&fit=max",
        "https://i.ytimg.com/vi/gSS2IgnnBo8/maxresdefault.jpg",
    ]

    constructor() {
        super();
        this.state = {
            currentSlideNumber: 0,
        }
    }

    prevSlide() {
        let prevSlideNumber = (this.state.currentSlideNumber-1+this.slideLength) % this.slideLength;
        this.setState({
            currentSlideNumber: prevSlideNumber
        });
    }

    nextSlide() {
        let nextSlideNumber = (this.state.currentSlideNumber + 1) % this.slideLength;
        this.setState({
            currentSlideNumber: nextSlideNumber
        });
    }

    renderSlide(display, i) {
        return (
            <Slide
            display={display}
            image={this.slideImages[i]}
            />
        )
    }

    render() {
        const slides = [];

        for (let i=0; i<3; i++) {
            let display = i === this.state.currentSlideNumber ? 'block' : 'none';
            slides.push(this.renderSlide(display, i));
        }

        return (
            <div className="slideshow-container">
                {slides}
                <a class="prev" onClick={() => this.prevSlide()}>&#10094;</a>
                <a class="next" onClick={() => this.nextSlide()}>&#10095;</a>
            </div>
        );
    }
}

export default SlideShow;