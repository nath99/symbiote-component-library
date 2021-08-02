/// <reference types="node" />
import React from "react";
interface Slide {
    image?: string;
    altText?: string;
    caption?: string;
}
interface Props {
    interval: number;
    slides: Slide[];
}
interface State {
    playing: boolean;
    visibleSlideIndex: number;
}
declare class Carousel extends React.Component<Props, State> {
    state: State;
    slideInterval: NodeJS.Timer;
    constructor(props: Props);
    componentDidMount(): void;
    goToNextSlide: () => void;
    goToSpecificSlide: (index: number) => void;
    playCarousel: () => void;
    pauseCarousel: () => void;
    clearIntervalTimer: () => void;
    restartIntervalTimer: () => void;
    swapPlayPauseIcon: () => void;
    renderDots: () => HTMLButtonElement[];
    renderSlides: () => HTMLLIElement[];
    render(): JSX.Element;
}
export { Carousel };
