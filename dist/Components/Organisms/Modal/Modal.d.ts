import React from "react";
interface Props {
    modalStyle: "full-image" | "side-by-side" | "top-to-bottom" | "no-image";
    image?: string;
    heading?: string;
    body?: string;
    callToActionLink?: string;
    callToActionText?: string;
    closeModalCallBack: () => void;
    visible: boolean;
}
declare class Modal extends React.Component<Props> {
    constructor(props: Props);
    componentDidMount(): void;
    render(): false | JSX.Element;
}
export { Modal };
