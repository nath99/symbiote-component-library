import React from "react";
interface PageAlertProps {
    title: string;
    message: string;
    status?: 'success' | 'info' | 'warning' | 'error';
}
declare class PageAlert extends React.Component<PageAlertProps> {
    static defaultProps: {
        status: string;
    };
    getIcon(status: string | undefined): string;
    render(): JSX.Element;
}
export { PageAlert, PageAlertProps };
