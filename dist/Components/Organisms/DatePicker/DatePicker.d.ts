import React from "react";
interface Props {
    type: "date" | "range";
    id: string;
    className?: string;
    dateRangeTitle?: string;
}
declare class DatePicker extends React.Component<Props> {
    constructor(props: Props);
    componentDidMount(): void;
    render(): false | JSX.Element;
}
export { DatePicker };
