import * as React from "react";

interface Props {
    className?: string,
    backgroundColors: [string, string, string, string],
    foregroundColors: ["normal" | "inverted", "normal" | "inverted", "normal" | "inverted", "normal" | "inverted"],
    content: [React.ReactNode, React.ReactNode, React.ReactNode, React.ReactNode]
}

class StackedContentFour extends React.Component<Props> {
    render() {
        const {
            className
        } = this.props

        return (
            <div className={`stacked-content ${className ? className : ""}`}>
                //TODO: Implement 4 stacked content boxes
            </div>
        )
    }
}

export { StackedContentFour };
