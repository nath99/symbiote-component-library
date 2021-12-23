import React from "react";

interface Image {
    image: string,
    altText: string
}

interface FooterDetails {
    address: string,
    email: string,
    phone: string
}

interface SocialLink {
    linkClass?: string,
    url?: string,
    target?: string,
    icon: string,
    title: string
}

interface Props {
    separatorImg?: Image,
    footerContent?: string,
    footerDetails?: FooterDetails,
    socialLinks?: SocialLink[],
    copyright?: string
}

class Footer extends React.Component<Props> {
    render() {
        const {
            separatorImg,
            footerContent,
            footerDetails,
            socialLinks,
            copyright
        } = this.props

        return (
            <div className="container-fluid footer-container">
                <footer className="footer">
                    <div className="container">
                        {separatorImg && (
                            <div className="row">
                                <div className="col-12 left">
                                    <img className="separator" src={separatorImg.image} alt={separatorImg.altText}/>
                                </div>
                            </div>
                        )}
                        {footerContent && (
                            <div className="row">
                                <div className="col-12 left">
                                    <div className="typography" dangerouslySetInnerHTML={{ __html: footerContent }} />
                                </div>
                            </div>
                        )}
                        {footerDetails && (
                            <div className="row">
                                {footerDetails.address && (
                                    <div className="col-12 col-lg-4 left">
                                        <h3>Address</h3>
                                        <p className="address h3" dangerouslySetInnerHTML={{ __html: footerDetails.address }} />
                                    </div>
                                )}
                                {footerDetails.email && (
                                    <div className="col-12 col-lg-4 left">
                                        <h3>Email</h3>
                                        <p className="email-link h3" dangerouslySetInnerHTML={{ __html: footerDetails.email }} />
                                    </div>
                                )}
                                {footerDetails.phone && (
                                    <div className="col-12 col-lg-4 left">
                                        <h3>Phone</h3>
                                        <p className="phone-link h3" dangerouslySetInnerHTML={{ __html: footerDetails.phone }} />
                                    </div>
                                )}
                            </div>
                        )}
                        <div className="row">
                            <div className="col-12 col-md-4 d-md-none social-links">
                                {socialLinks && socialLinks.map(socialLink => (
                                    <a
                                        className={socialLink.linkClass ? socialLink.linkClass : ""}
                                        href={socialLink.url ? socialLink.url : ""}
                                        target={socialLink.target ? socialLink.target : "_blank"}
                                        title={socialLink.title}
                                    >
                                        <i className={`lab la-${socialLink.icon} social-icon`} />
                                        <p className="sr-only">Social media link - {socialLink.title}</p>
                                    </a>
                                ))}
                            </div>
                            <div className="col-12 col-md-8 bottom copyright">
                                {copyright && <div className="typography" dangerouslySetInnerHTML={{ __html: copyright }} />}
                            </div>
                            <div className="col-12 col-md-4 align-right d-none d-md-block social">
                                {socialLinks && socialLinks.map(socialLink => (
                                    <a
                                        className={socialLink.linkClass ? socialLink.linkClass : ""}
                                        href={socialLink.url ? socialLink.url : ""}
                                        target={socialLink.target ? socialLink.target : "_blank"}
                                        title={socialLink.title}
                                    >
                                        <i className={`lab la-${socialLink.icon} social-icon`} />
                                        <p className="sr-only">Social media link - {socialLink.title}</p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export { FooterDetails, Footer };
