/// <reference types="node" />
import * as React from "react";
interface Slide {
    image?: string;
    altText?: string;
    captionHeading?: string;
    captionBody?: string;
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
    goToPreviousSlide: () => void;
    goToSpecificSlide: (index: number) => void;
    playCarousel: () => void;
    pauseCarousel: () => void;
    clearIntervalTimer: () => void;
    restartIntervalTimer: () => void;
    swapPlayPauseIcon: () => void;
    render(): JSX.Element;
}
export { Carousel };
