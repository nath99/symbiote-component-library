import React from "react";
interface Image {
    image: string;
    altText: string;
}
interface FooterDetails {
    address: string;
    email: string;
    phone: string;
}
interface SocialLink {
    linkClass?: string;
    url?: string;
    target?: string;
    icon: string;
    title: string;
}
interface Props {
    separatorImg?: Image;
    footerContent?: string;
    footerDetails?: FooterDetails;
    socialLinks?: SocialLink[];
    copyright?: string;
}
declare class Footer extends React.Component<Props> {
    render(): JSX.Element;
}
export { FooterDetails, Footer };
