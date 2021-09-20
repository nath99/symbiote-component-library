import * as React from "react";

interface Breakpoints {
    sm: number,
    md: number,
    lg: number,
    xl: number
}

interface Props {
    breakpoints: Breakpoints,
    xsImages: string[],
    smImages?: string[],
    mdImages?: string[],
    lgImages?: string[],
    xlImages?: string[],
    altText: string,
    className?: string
}

export default class PictureImage extends React.Component<Props> {
    render() {
        const {
            breakpoints,
            xsImages,
            smImages,
            mdImages,
            lgImages,
            xlImages,
            altText,
            className
        } = this.props;

        return (
            <picture>
                {xsImages &&
                    <source srcSet={`${xsImages[0] ? xsImages[0] : ""} ${xsImages[1] ? ',' + xsImages[1] + '2x' : ""}`}
                    media={`(max-width: ${breakpoints.sm -1 }px`} />
                }
                {smImages &&
                    <source srcSet={`${smImages[0] ? smImages[0] : ""} ${smImages[1] ? ',' + smImages[1] + '2x' : ""}`}
                    media={`(min-width: ${breakpoints.sm}px (max-width: ${breakpoints.md -1 }px)`} />
                }
                {mdImages &&
                    <source srcSet={`${mdImages[0] ? mdImages[0] : ""} ${mdImages[1] ? ',' + mdImages[1] + '2x' : ""}`}
                    media={`(min-width: ${breakpoints.md}px (max-width: ${breakpoints.lg - 1}px)`} />
                }
                {lgImages &&
                <source srcSet={`${lgImages[0] ? lgImages[0] : ""} ${lgImages[1] ? ',' + lgImages[1] + '2x' : ""}`}
                    media={`(min-width: ${breakpoints.lg}px (max-width: ${breakpoints.xl - 1}px)`} />
                }
                {xlImages &&
                <source srcSet={`${xlImages[0] ? xlImages[0] : ""} ${xlImages[1] ? ',' + xlImages[1] + '2x' : ""}`}
                    media={`(min-width: ${breakpoints.xl}px`} />
                }
                {xsImages &&
                <img src={`${xsImages[0] ? xsImages[0] : ""}`}
                    srcSet={`${xsImages[0] ? xsImages[0] + '2x' : ""}`} className={className && className} alt={altText} />
                }
            </picture>
        )
    }
}

export { PictureImage };