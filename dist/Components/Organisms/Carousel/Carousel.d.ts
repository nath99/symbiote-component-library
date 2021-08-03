/// <reference types="node" />
import React from "react";
interface Props {
    interval: number;
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
}
export { Carousel };
