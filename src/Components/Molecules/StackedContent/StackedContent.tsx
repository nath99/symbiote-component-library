import React from "react";
import { StackedContentTwo } from "./StackedContentTwo";
import { StackedContentThree } from "./StackedContentThree";
import { StackedContentFour } from "./StackedContentFour";

interface Props {
    className?: string,
    backgroundColors: [string, string, ...string[]],
    foregroundColors: ["normal" | "inverted", "normal" | "inverted", ..."normal"[] | "inverted"[]],
    content: [React.ReactNode, React.ReactNode, ...React.ReactNode[]]
}

class StackedContent extends React.Component<Props> {

    renderStackedContent = (): JSX.Element | undefined => {
        const {
            className,
            backgroundColors,
            foregroundColors,
            content
        } = this.props

        let stackedContent;

        switch (content.length) {
            case 2:
                stackedContent =
                    <StackedContentTwo
                        className={className}
                        backgroundColors={[backgroundColors[0], backgroundColors[1]]}
                        foregroundColors={[foregroundColors[0], foregroundColors[1]]}
                        content={[content[0], content[1]]}
                    ></StackedContentTwo>
                break;

            case 3:
                stackedContent =
                    <StackedContentThree
                        className={className}
                        backgroundColors={[backgroundColors[0], backgroundColors[1], backgroundColors[2]]}
                        foregroundColors={[foregroundColors[0], foregroundColors[1], foregroundColors[2]]}
                        content={[content[0], content[1], content[2]]}
                    ></StackedContentThree>
                break;

            case 4:
                stackedContent =
                    <StackedContentFour
                        className={className}
                        backgroundColors={[backgroundColors[0], backgroundColors[1], backgroundColors[2], backgroundColors[3]]}
                        foregroundColors={[foregroundColors[0], foregroundColors[1], foregroundColors[2], foregroundColors[3]]}
                        content={[content[0], content[1], content[2], content[3]]}
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
