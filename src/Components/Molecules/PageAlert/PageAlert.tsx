import React from "react";

interface PageAlertProps {
    title: string,
    message: string,
    status?: 'success'|'info'|'warning'|'error'
}

class PageAlert extends React.Component<PageAlertProps> {
    static defaultProps = {
        status: 'success'
    }

    getIcon(status:string|undefined) {
        let icon = 'la-check';

        switch(status) {
            case 'success': {
                icon = 'la-check';
            } break;

            case 'info': {
                icon = 'la-info';
            } break;

            case 'warning': {
                icon = 'la-exclamation';
            } break;

            case 'error': {
                icon = 'la-times';
            } break;
        }

        return icon;
    }

    render() {
        const {
            title,
            message,
            status
        } = this.props;

        const icon = this.getIcon(status);

        return (
            <div className={`page-alert ${status}`}>
                <div className="alert-icon">
                    <i className={`las xxs ${icon}`}></i>
                </div>
                <div className="alert-content">
                    <p className="alert-content--title">{title}</p>
                    <p className="alert-content--message">{message}</p>
                </div>
                <i className="alert-close las la-times xs"></i>
            </div>
        )
    }
}

export { PageAlert, PageAlertProps };