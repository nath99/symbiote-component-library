import * as React from "react";
import { StackedContentContent } from "./StackedContent";

interface Props {
    className?: string,
    contents: StackedContentContent[]
}

class StackedContentThree extends React.Component<Props> {
    renderBox1(): JSX.Element {
        const { contents } = this.props;

        const boxContents = contents[0];
        const boxBgClassName = `content-box box-1 col-12 col-md-10${!boxContents.content ? ' content-box--empty' : ''}`;
        const boxFgClassName = `col-12 col-md-7 col-lg-5${boxContents.foregroundColor == "inverted" ? " inverted" : ""}`;

        return (
            <div className={boxBgClassName} style={{ background: `${boxContents.backgroundColor}` }}>
                <div className={boxFgClassName}>
                    {boxContents.content}
                </div>
            </div>
        )
    }

    renderBox2(): JSX.Element {
        const { contents } = this.props;

        const boxContents = contents[1];
        const boxBgClassName = `content-box box-2 col-12 col-md-6 offset-md-6 col-lg-7 offset-lg-5${!boxContents.content ? ' content-box--empty' : ''}`;
        const boxFgClassName = `col-12 col-lg-10${boxContents.foregroundColor == "inverted" ? " inverted" : ""}`;

        return (
            <div className={boxBgClassName} style={{ background: `${boxContents.backgroundColor}` }}>
                <div className={boxFgClassName}>
                    {boxContents.content}
                </div>
            </div>
        )
    }

    renderBox3(): JSX.Element {
        const { contents } = this.props;

        const boxContents = contents[2];
        const boxBgClassName = `content-box box-3 col-12 col-md-6 offset-md-1 col-lg-7 offset-lg-2${!boxContents.content ? ' content-box--empty' : ''}`;
        const boxFgClassName = `col-12 col-lg-10${boxContents.foregroundColor == "inverted" ? " inverted" : ""}`;

        return (
            <div className={boxBgClassName} style={{ background: `${boxContents.backgroundColor}` }}>
                <div className={boxFgClassName}>
                    {boxContents.content}
                </div>
            </div>
        )
    }

    render() {
        const {
            className
        } = this.props

        return (
            <div className={`stacked-content ${className ? className : ""}`}>
                {this.renderBox1()}
                {this.renderBox2()}
                {this.renderBox3()}
            </div>
        )
    }
}

export { StackedContentThree };
