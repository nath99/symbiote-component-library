import * as React from "react";
import { StackedContentTwo } from "./StackedContentTwo";
import { StackedContentThree } from "./StackedContentThree";
import { StackedContentFour } from "./StackedContentFour";

export interface StackedContentContent {
    backgroundColor: string,
    foregroundColor: string,
    content: React.ReactNode
}

interface Props {
    className?: string,
    contents: StackedContentContent[]
}

class StackedContent extends React.Component<Props> {
    renderStackedContent = (): JSX.Element | undefined => {
        const {
            className,
            contents
        } = this.props

        let stackedContent;

        switch (contents.length) {
            case 2:
                stackedContent =
                    <StackedContentTwo
                        className={className}
                        contents={contents}
                    ></StackedContentTwo>
                break;

            case 3:
                stackedContent =
                    <StackedContentThree
                        className={className}
                        contents={contents}
                    ></StackedContentThree>
                break;

            case 4:
                stackedContent =
                    <StackedContentFour
                        className={className}
                        contents={contents}
                    ></StackedContentFour>
                break;
        }

        return stackedContent;
    }

    render() {
        return (
            this.renderStackedContent()
        )
    }
}

export { StackedContent };
