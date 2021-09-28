import * as React from "react";

interface ButtonProps {
	type?: 'primary'|'secondary'|'tertiary',
	size?: 'lg'|'md'|'sm'|'xs',
	style?: 'outline-light'|'outline-dark'|'cta',
	path?: string,
	linkDescription?: string,
	openInNewTab?: boolean
	enabled?: boolean
}

class Button extends React.Component<ButtonProps> {
	static defaultProps = {
		enabled: true
	}

	render() {
		const {
			type,
			size,
			style,
			path,
			linkDescription,
			openInNewTab,
			enabled,
			children
		} = this.props;

		return (
			path ?
				<a data-testid="button" className={`button ${type} ${size} ${style}` + (enabled ? '' : ' disabled')} href={path} target={openInNewTab ? "_blank" : "_self"} aria-label={linkDescription}></a>
			:
				<button
					data-testid="button"
					className={`button ${type} ${size} ${style}` + (enabled ? '' : ' disabled')}>{children}
				</button>

			)
		}
	}

	export { Button, ButtonProps };

