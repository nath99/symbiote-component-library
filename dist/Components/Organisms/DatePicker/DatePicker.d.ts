import * as React from "react";
interface Props {
    type: "date" | "range";
    label?: string;
    id: string;
    className?: string;
}
declare class DatePicker extends React.Component<Props> {
    constructor(props: Props);
    componentDidMount(): void;
    render(): false | JSX.Element;
}
export { DatePicker };
