import React from "react";

interface Props {
    image: string[],
    altText: string
    className?: string
}

export default class Image extends React.Component<Props> {
    render() {
        const {
            image,
            altText,
            className
        } = this.props;

        return (
            <img src={image[0] ? image[0] : ""} srcSet={`${image[1] ? image[1] + "2x" : ""}`} className={className && className} alt={altText} />
        )
    }
}

export { Image };


