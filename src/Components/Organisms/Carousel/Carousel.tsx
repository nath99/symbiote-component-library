import React from "react";
require('../../../libs/swiped-events-1.1.4/swiped-events.min.js');

interface Slide {
    image?: string
    altText?: string
    captionHeading?: string
    captionBody?: string
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
        const { interval } = this.props;
        const { playing } = this.state;

        // Get rendered elements
        const nextSlide = document.querySelector('.next-slide');
        const previousSlide = document.querySelector('.previous-slide');
        const playPause = document.querySelector('.play-pause');
        const dots = document.querySelectorAll('.carousel-dot');

        // Set the interval timer for the first time
        this.slideInterval = setInterval(this.goToNextSlide, interval);

        // Add click listener for play/pause button
        if (playPause) {
            playPause.addEventListener('click', () => {
                playing ? this.pauseCarousel() : this.playCarousel();
            });
        }

        // Loop through dots and create a click listener for each one
        if (dots) {
            for (let i = 0; i < dots.length; i++) {
                // Assign a click listener to each dot to select the specific index
                dots[i].addEventListener('click', () => {
                    this.goToSpecificSlide(i)
                });
            }
        }

        // Add click listener for next button to move to the next slide
        if (nextSlide) {
            nextSlide.addEventListener('click', () => {
                // Stop the current interval
                this.clearIntervalTimer();

                this.goToNextSlide();

                // When the next slide button is clicked, make sure to restart the interval to avoid images swapping right away
                this.restartIntervalTimer();
            });
        }

        // Add click listener for previous button to move to the previous slide
        if (previousSlide) {
            previousSlide.addEventListener('click', () => {
                // Stop the current interval
                this.clearIntervalTimer();

                this.goToPreviousSlide();

                // When the previous slide button is clicked, make sure to restart the interval to avoid images swapping right away
                this.restartIntervalTimer();
            });
        }

        // Add click listener for next button to move to the next slide
        document.addEventListener('swiped-right', () => {
            // Stop the current interval
            this.clearIntervalTimer();

            this.goToPreviousSlide();

            // When the previous slide button is clicked, make sure to restart the interval to avoid images swapping right away
            this.restartIntervalTimer();
        });

        // Add a swipe left listener to go to move to the previous slide
        document.addEventListener('swiped-left', () => {
            // Stop the current interval
            this.clearIntervalTimer();

            this.goToNextSlide();

            // When the next slide button is clicked, make sure to restart the interval to avoid images swapping right away
            this.restartIntervalTimer();
        });
    }

    // Moves across the array of slides
    goToNextSlide = (): void => {
        const { slides } = this.props;
        const { visibleSlideIndex } = this.state;

        // If we are at the last slide, wrap around to the first slide
        if (visibleSlideIndex == slides.length - 1) {
            this.setState({
                visibleSlideIndex: 0
            })
            // Otherwise just go forward a slide
        } else {
            this.setState({
                visibleSlideIndex: visibleSlideIndex + 1
            })
        }
    }

    // Moves across the array of slides
    goToPreviousSlide = (): void => {
        const { slides } = this.props;
        const { visibleSlideIndex } = this.state;

        // If we are at the first slide, wrap around to the last slide
        if (visibleSlideIndex == 0) {
            this.setState({
                visibleSlideIndex: slides.length - 1
            })
            // Otherwise just go back a slide
        } else {
            this.setState({
                 visibleSlideIndex: visibleSlideIndex - 1
            })
        }
    }

    // Move to specific slide based on index parameter
    goToSpecificSlide = (index: number): void => {
        this.clearIntervalTimer();

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

    render() {
        const { slides } = this.props;
        const { visibleSlideIndex } = this.state;

        return (
            <div className="carousel">
                <ul>
                    {slides.map((slide, index) =>
                        <li className={`carousel-slide ${visibleSlideIndex == index ? 'visible' : ''}`}>
                            <img src={slide.image} alt={slide.altText}></img>
                            <div className="carousel-caption">
                                <h5 className="inverted">{slide.captionHeading}</h5>
                                <p className="inverted">{slide.captionBody}.</p>
                            </div>
                        </li>
                    )}
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
                    {slides.map((slide, index) =>
                        <button className={`carousel-dot ${visibleSlideIndex == index ? 'active' : ''}`}></button>
                    )}
                </div>
            </div>
        )
    }
}

export { Carousel };