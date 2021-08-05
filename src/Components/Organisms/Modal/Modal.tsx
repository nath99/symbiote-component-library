import React from "react";
import scrollLock from '../../../helpers/scroll-lock/scroll-lock';
import focusTrap from '../../../helpers/focus-trap/focus-trap';

//TO DO: Add side by side layout

interface Props {
    modalStyle?: "full-image" | "side-by-side"
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
                    <div className="modal">
                        <button className="close-modal">
                            <i className="las la-times sm inverted"></i>
                        </button>

                        <div className={`modal-content ${modalStyle ? modalStyle : 'no-image'}`}>
                           {modalStyle !=="side-by-side" ?
                                <div className="modal-content-wrapper" style={{
                                    backgroundImage: `url(${image})`
                                }}>
                                    <div className="content">
                                        <h3 className={`${modalStyle == "full-image" ? 'inverted' : ''}`}>{heading}</h3>
                                        <p className={`${modalStyle == "full-image" ? 'inverted' : ''}`}>{body}</p>
                                        <div className="button-container">
                                            <a className={`button cta ${modalStyle == "full-image" ? 'inverted' : ''}`} href={callToActionLink}>{callToActionText}</a>
                                        </div>
                                    </div>
                                </div>
                            :
                                <React.Fragment>
                                    <div className="content">
                                        <h3>{heading}</h3>
                                        <p>{body}</p>
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