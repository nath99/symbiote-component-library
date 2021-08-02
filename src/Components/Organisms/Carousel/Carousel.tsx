import React from "react";

// TODO: Add caption feature to slides
// TODO: Add swipe functionality to swap between slides

interface Slide {
    image?: string
    altText?: string
    caption?: string
}
interface Props {
    interval: number
    slides: Slide[]
}

interface State {
    playing: boolean,
    visibleSlideIndex: number
}

class Carousel extends React.Component<Props, State> {
    state: State
    slideInterval: NodeJS.Timer

    constructor(props: Props) {
        super(props);

        this.state = {
            playing: true,
            visibleSlideIndex: 0
        }
    }

    componentDidMount() {
        const { interval, slides } = this.props;
        const { visibleSlideIndex, playing } = this.state;

        // Get rendered elements
        const nextSlide = document.querySelector('.next-slide');
        const previousSlide = document.querySelector('.previous-slide');
        const playPause = document.querySelector('.play-pause');
        const renderedDots = document.querySelectorAll('.carousel-dot');
        const renderedSlides = document.querySelectorAll('.carousel-slide');

        // Set the interval timer for the first time
        this.slideInterval = setInterval(this.goToNextSlide, interval);

        // Add click listener for play/pause button
        if (playPause) {
            playPause.addEventListener('click', () => {
                playing ? this.pauseCarousel() : this.playCarousel();
            });
        }

        if (nextSlide) {
            // Add click listener for next button to move to the next slide
            nextSlide.addEventListener('click', () => {
                this.clearIntervalTimer();

                renderedSlides[visibleSlideIndex].classList.remove('visible');
                renderedDots[visibleSlideIndex].classList.remove('active');

                this.setState({
                    visibleSlideIndex: visibleSlideIndex + 1
                })


                if (visibleSlideIndex >= renderedSlides.length) {
                    this.setState({
                        visibleSlideIndex: 0
                    })
                }

                renderedSlides[visibleSlideIndex].classList.add('visible');
                renderedDots[visibleSlideIndex].classList.add('active');

                // When the next slide button is clicked, make sure to reset the interval to avoid images swapping right away
                this.restartIntervalTimer();
            });
        }
        // Add click listener for previous button to move to the previous slide
        if (previousSlide) {
            previousSlide.addEventListener('click', () => {
                this.clearIntervalTimer();

                renderedSlides[visibleSlideIndex].classList.remove('visible');
                renderedDots[visibleSlideIndex].classList.remove('active');

                this.setState({
                    visibleSlideIndex: visibleSlideIndex-1
                })

                if (visibleSlideIndex < 0) {
                    this.setState({
                        visibleSlideIndex: slides.length - 1
                    })
                }

                renderedSlides[visibleSlideIndex].classList.add('visible');
                renderedDots[visibleSlideIndex].classList.add('active');

                // When the previous slide button is clicked, make sure to reset the interval to avoid images swapping right away
                this.restartIntervalTimer();
            });
        }
    }

    // Moves accross the array of slides
    goToNextSlide = (): void => {
        const { visibleSlideIndex } = this.state;

        const renderedSlides = document.querySelectorAll('.carousel-slide');
        const renderedDots = document.querySelectorAll('.carousel-dot');

        // Hide currently visible slide
        renderedSlides[visibleSlideIndex].classList.remove('visible');
        renderedDots[visibleSlideIndex].classList.remove('active');

        // Iterate one index
        this.setState({
            visibleSlideIndex: visibleSlideIndex + 1
        })


        // If we hit the end of the array, then start from the begining
        if (visibleSlideIndex >= renderedSlides.length) {
            this.setState({
                visibleSlideIndex: 0
            })
        }

        // Set slide by updated index to be visible
        renderedSlides[visibleSlideIndex].classList.add('visible');
        renderedDots[visibleSlideIndex].classList.add('active');
    }

    // Move to specific slide based on index parameter
    goToSpecificSlide = (index: number): void => {
        const renderedSlides = document.querySelectorAll('.carousel-slide');
        const renderedDots = document.querySelectorAll('.carousel-dot');
        const { visibleSlideIndex } = this.state;

        this.clearIntervalTimer();

        // Hide currently visible slide
        renderedSlides[visibleSlideIndex].classList.remove('visible');
        renderedDots[visibleSlideIndex].classList.remove('active');

        // Set slide by index parameter to be visible and set appropriate dot to be active
        renderedSlides[index].classList.add('visible');
        renderedDots[index].classList.add('active');

        // Update the currently visible index value
        this.setState({
            visibleSlideIndex: index
        })

        // When going to a specific slide, make sure to reset the interval to avoid images swapping right away
        this.restartIntervalTimer();
    }

    // Play carousel
    playCarousel = (): void => {
        const playPause = document.querySelector('.play-pause');

        if (playPause) {
            this.setState({
                playing: true
            })

            this.restartIntervalTimer();
            this.swapPlayPauseIcon();
        }
    }

    // Pause carousel
    pauseCarousel = (): void => {
        const playPause = document.querySelector('.play-pause');
        const playPauseIcon = document.querySelector('.play-pause i');

        if (playPause && playPauseIcon) {
            this.setState({
                playing: false
            })

            this.clearIntervalTimer();
            this.swapPlayPauseIcon();
        }
    }

    // Clear the interval timer
    clearIntervalTimer = (): void => {
        clearInterval(this.slideInterval);
    }

    // Reset the interval timer
    restartIntervalTimer = (): void => {
        const { interval } = this.props;
        const { playing } = this.state;

        this.slideInterval = setInterval(this.goToNextSlide, interval);

        // Check if currently paused, if so swap the icons over and set playing to true
        if (!playing) {
            this.swapPlayPauseIcon();
            this.setState({
                playing: true
            })
        }
    }

    // Swap the play and pause icons
    swapPlayPauseIcon = (): void => {
        const playPauseIcon = document.querySelector('.play-pause i');

        if (playPauseIcon) {
            playPauseIcon.classList.toggle("la-pause-circle");
            playPauseIcon.classList.toggle("la-play-circle");
        }
    }

    renderDots = (): HTMLButtonElement[] => {
        const { slides } = this.props;
        const { visibleSlideIndex } = this.state;

        let dots:HTMLButtonElement[] = [];

        // Loop through slides and create a dot for each one
        for (let index = 0; index < slides.length; index++) {
            const dot = document.createElement('button');

            // Add class
            dot.classList.add('carousel-dot');

            // Assign a click listener to each dot to select the specific index
            dot.addEventListener('click', () => {
                this.goToSpecificSlide(index)
            });

            // Add the dot to its array
            dots.push(dot)
        }

        // Make appropriate dot visible
        dots[visibleSlideIndex].classList.add('visible');

        return dots;
    }

    renderSlides = (): HTMLLIElement[] => {
        const { slides } = this.props;
        const { visibleSlideIndex } = this.state;

        let renderedSlides:HTMLLIElement[] = [];

        // Loop through slides and create a dot for each one
        for (let index = 0; index < slides.length; index++) {
            const slide = document.createElement('li');
            const image = document.createElement('img');

            // Add classes
            slide.classList.add('carousel-slide');
            image.classList.add('carousel-slide-background');

             // Add the image source
            if (slides[index].image) {
                image.src = slides[index].image!;
            }

            // Add the image alt text
            if (slides[index].altText) {
                image.alt = slides[index].altText!;
            }

            // Add the image to the slide
            slide.append(image)

            // Add the slide to its array
            renderedSlides.push(slide)
        }

        // Make appropriate slide visible
        renderedSlides[visibleSlideIndex].classList.add('visible');

        return renderedSlides;
    }

    render() {
        return (
            <div className="carousel">
                <ul>
                    {this.renderSlides()}
                </ul>
                <div className="controls">
                    <button className="previous-slide">
                        <i className="las la-arrow-circle-left sm inverted"></i>
                        <span className="sr-only">Previous slide</span>
                    </button>
                    <button className="play-pause">
                        <i className="las la-pause-circle sm inverted"></i>
                        <span className="sr-only">Pause</span>
                    </button>
                    <button className="next-slide">
                        <i className="las la-arrow-circle-right sm inverted"></i>
                        <span className="sr-only">Next slide</span>
                    </button>
                </div>
                <div className="carousel-dots-container">
                    {this.renderDots()}
                </div>
            </div>
        )
    }
}

export { Carousel };