import * as React from "react";

interface Props {
	type?: 'primary'|'secondary'|'tertiary',
	size?: 'lg'|'md'|'sm'|'xs',
	style?: 'outline-light'|'outline-dark'|'cta',
	path?: string,
	linkDescription?: string,
	openInNewTab?: boolean
	enabled?: boolean,
	testId?: string,
}

class Button extends React.Component<Props> {
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
			children,
			testId
		} = this.props;

		const linkTarget = Boolean(openInNewTab) ? '_blank' : '_self';
		const dataTestId = (typeof testId !== 'undefined') ? testId : 'button';
		let btnClassName = `button ${type} ${size} ${style}`;

		if (!enabled) {
			btnClassName += ' disabled';
		}

		return (
			path ?
				<a data-testid={dataTestId} className={btnClassName} href={path} target={linkTarget} aria-label={linkDescription}>{children}</a>
			:
				<button
					data-testid={dataTestId}
					className={btnClassName}
				>
					{children}
				</button>

			)
		}
	}

	export { Button };

