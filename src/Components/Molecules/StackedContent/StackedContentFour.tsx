import * as React from "react";
import { StackedContentContent } from "./StackedContent";

interface Props {
    className?: string,
    contents: StackedContentContent[]
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
