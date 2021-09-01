import React from "react";

interface Props {
    className?: string,
    backgroundColors: [string, string],
    foregroundColors: ["normal" | "inverted", "normal" | "inverted"],
    content: [React.ReactNode, React.ReactNode]
}

class StackedContentTwo extends React.Component<Props> {
    render() {
        const {
            className,
            backgroundColors,
            foregroundColors,
            content
        } = this.props

        return (
            <div className={`stacked-content ${className ? className : ""}`}>
                <div className={`content-box${!content[0] ? " content-box--empty" : ""} box-1 col-12 col-md-10`} style={{ background: `${backgroundColors[0]}` }}>
                    <div className={`col-12 col-md-7 col-lg-5 ${foregroundColors[0] == "inverted" ? "inverted" : ""}`}>
                        {content[0]}
                    </div>
                </div>
                <div className={`content-box${!content[1] ? " content-box--empty" : ""} box-2 col-12 col-md-6 offset-md-6 col-lg-7 offset-lg-5`} style={{ background: `${backgroundColors[1]}` }}>
                    <div className={`col-12 col-lg-10 ${foregroundColors[1] == "inverted" ? "inverted" : ""}`}>
                        {content[1]}
                    </div>
                </div>
            </div>
        )
    }
}

export { StackedContentTwo };
