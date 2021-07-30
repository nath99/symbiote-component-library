import React from "react";

// TODO: Add caption feature to slides
// TODO: Add swipe functionality to swap between slides

interface Props {
    interval: number
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
        const { visibleSlideIndex, playing } = this.state;

        const nextSlide = document.querySelector('.next-slide');
        const previousSlide = document.querySelector('.previous-slide');
        const playPause = document.querySelector('.play-pause');

        const slides = document.querySelectorAll('.carousel-slide');
        const carouselDotsContainer = document.querySelector('.carousel-dots-container');
        const carouselDots = document.querySelectorAll('.carousel-dot');

        // Set the interval timer for the first time
        this.slideInterval = setInterval(this.goToNextSlide, interval);

        // Loop through slides and create a dot for each one
        for (let index = 0; index < slides.length; index++) {
            const dot = document.createElement('button');
            dot.classList.add('carousel-dot');

            // Assign a click listener to each dot to select the specific index
            dot.addEventListener('click', () => {
                this.goToSpecificSlide(index)
            });

            if (carouselDotsContainer) {
                carouselDotsContainer.appendChild(dot);
            }
        }

        slides[visibleSlideIndex].classList.add('visible');
        carouselDots[visibleSlideIndex].classList.add('active');

        if (playPause) {
            playPause.addEventListener('click', () => {
                playing ? this.pauseCarousel() : this.playCarousel();
            });
        }

        if (nextSlide) {
            // Move to the next slide
            nextSlide.addEventListener('click', () => {
                this.clearIntervalTimer();

                slides[visibleSlideIndex].classList.remove('visible');
                carouselDots[visibleSlideIndex].classList.remove('active');

                this.setState({
                    visibleSlideIndex: visibleSlideIndex + 1
                })


                if (visibleSlideIndex >= slides.length) {
                    this.setState({
                        visibleSlideIndex: 0
                    })
                }

                slides[visibleSlideIndex].classList.add('visible');
                carouselDots[visibleSlideIndex].classList.add('active');

                // When the next slide button is clicked, make sure to reset the interval to avoid images swapping right away
                this.restartIntervalTimer();
            });
        }

        if (previousSlide) {
            // Move to the previous slide
            previousSlide.addEventListener('click', () => {
                this.clearIntervalTimer();

                slides[visibleSlideIndex].classList.remove('visible');
                carouselDots[visibleSlideIndex].classList.remove('active');

                this.setState({
                    visibleSlideIndex: visibleSlideIndex-1
                })

                if (visibleSlideIndex < 0) {
                    this.setState({
                    visibleSlideIndex: slides.length - 1
                })

                }
                slides[visibleSlideIndex].classList.add('visible');
                carouselDots[visibleSlideIndex].classList.add('active');

                // When the previous slide button is clicked, make sure to reset the interval to avoid images swapping right away
                this.restartIntervalTimer();
            });
        }
    }

    // Moves accross the array of slides
    goToNextSlide = (): void => {
        const { visibleSlideIndex } = this.state;
        const slides = document.querySelectorAll('.carousel-slide');
        const carouselDots = document.querySelectorAll('.carousel-dot');

        // Hide currently visible slide
        slides[visibleSlideIndex].classList.remove('visible');
        carouselDots[visibleSlideIndex].classList.remove('active');

        // Iterate one index
        this.setState({
            visibleSlideIndex: visibleSlideIndex + 1
        })


        // If we hit the end of the array, then start from the begining
        if (visibleSlideIndex >= slides.length) {
            this.setState({
                visibleSlideIndex: 0
            })
        }

        // Set slide by updated index to be visible
        slides[visibleSlideIndex].classList.add('visible');
        carouselDots[visibleSlideIndex].classList.add('active');
    }

    // Move to specific slide based on index parameter
    goToSpecificSlide = (index: number): void => {
        const slides = document.querySelectorAll('.carousel-slide');
        const carouselDots = document.querySelectorAll('.carousel-dot');
        const { visibleSlideIndex } = this.state;

        this.clearIntervalTimer();

        // Hide currently visible slide
        slides[visibleSlideIndex].classList.remove('visible');
        carouselDots[visibleSlideIndex].classList.remove('active');

        // Set slide by index parameter to be visible
        slides[index].classList.add('visible');
        carouselDots[index].classList.add('active');

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

}

export { Carousel };