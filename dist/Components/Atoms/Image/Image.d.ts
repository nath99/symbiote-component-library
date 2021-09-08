import React from "react";
interface Props {
    image: string[];
    altText: string;
    className?: string;
}
export default class Image extends React.Component<Props> {
    render(): JSX.Element;
}
export { Image };
