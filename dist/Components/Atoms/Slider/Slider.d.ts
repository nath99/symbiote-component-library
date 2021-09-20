import * as React from "react";
interface SliderProps {
    value?: number;
    min?: number;
    max?: number;
    sliderId?: string;
}
interface SliderState {
    value: number;
}
declare class Slider extends React.Component<SliderProps, SliderState> {
    static defaultProps: {
        min: number;
        max: number;
        value: number;
    };
    constructor(props: SliderProps);
    handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
    render(): JSX.Element;
}
export { Slider, SliderProps };
