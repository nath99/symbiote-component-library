import React from "react";
import scrollLock from '../../../helpers/scroll-lock/scroll-lock';
import focusTrap from '../../../helpers/focus-trap/focus-trap';

interface Props {
    modalStyle: "full-image" | "side-by-side" | "top-to-bottom" | "no-image",
    image?: string,
    heading?: string,
    body?: string,
    callToActionLink?: string,
    callToActionText?: string,
    closeModalCallBack: () => void
    visible: boolean
}

class Modal extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        const { visible, closeModalCallBack } = this.props;
        const modal = document.querySelector(".modal");
        const modalCover = document.querySelector(".modal-cover");
        const modalClose = document.querySelector(".close-modal");

        // Get the prior focused element before the modal is opened
        const priorFocusedElement = document.activeElement && document.activeElement as HTMLElement;

        if (modal && visible) {
            // Lock the scrollability of body
            scrollLock.enable();

            // Lock the focus to elements within the modal and focus on first element
            focusTrap.enable(modal);
        }

        if (modalCover && modalClose && priorFocusedElement) {
            modalClose.addEventListener("click", function () {
                // Unlock the scrollability of body
                scrollLock.disable();

                // Remove lock on focus within modal elements
                focusTrap.disable(priorFocusedElement);

                // Hide modal by call backing to parent compontent
                closeModalCallBack();
            });
        }

    }

    render() {
        const {
            modalStyle,
            image,
            heading,
            body,
            callToActionLink,
            callToActionText,
            visible
        } = this.props;

        return (
            visible &&
                <div className="modal-cover">
                    <div className="modal" role="dialog" aria-labelledby="modal-heading" aria-describedby="modal-body" aria-modal="true">
                        <button className="close-modal">
                            <i className="las la-times sm inverted"></i>
                        </button>

                        <div className={`modal-content ${modalStyle}`}>
                           {modalStyle !== "side-by-side" && modalStyle !== "top-to-bottom" ?
                                <div className="modal-content-wrapper" style={{
                                    backgroundImage: `url(${image})`
                                }}>
                                    <div className="content">
                                        <h3 id="modal-heading" className={`${modalStyle == "full-image" ? 'inverted' : ''}`}>{heading}</h3>
                                        <p id="modal-body" className={`${modalStyle == "full-image" ? 'inverted' : ''}`}>{body}</p>
                                        <div className="button-container">
                                            <a className={`button cta ${modalStyle == "full-image" ? 'inverted' : ''}`} href={callToActionLink}>{callToActionText}</a>
                                        </div>
                                    </div>
                                </div>
                            :
                                <React.Fragment>
                                    <div className="content">
                                        <h3 id="modal-heading">{heading}</h3>
                                        <p id="modal-body">{body}</p>
                                        <div className="button-container">
                                            <a className="button cta" href={callToActionLink}>{callToActionText}</a>
                                        </div>
                                    </div>
                                    <div className="image" style={{
                                        backgroundImage: `url(${image})`
                                    }}></div>
                                </React.Fragment>
                            }
                        </div>
                    </div>
                </div>
        )
    }
}

export { Modal };