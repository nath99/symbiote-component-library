import * as React from "react";
interface Props {
    type?: 'primary' | 'secondary' | 'tertiary';
    size?: 'lg' | 'md' | 'sm' | 'xs';
    style?: 'outline-light' | 'outline-dark' | 'cta';
    path?: string;
    linkDescription?: string;
    openInNewTab?: boolean;
    enabled?: boolean;
    testId?: string;
}
declare class Button extends React.Component<Props> {
    static defaultProps: {
        enabled: boolean;
    };
    render(): JSX.Element;
}
export { Button };
