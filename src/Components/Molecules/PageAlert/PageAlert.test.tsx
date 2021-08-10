/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";

import { PageAlert, PageAlertProps } from "./PageAlert";

    // Add Accessibility testing
expect.extend(toHaveNoViolations)

describe("Page Alert Component", () => {
    let pageAlertProps: PageAlertProps;

    beforeEach(() => {
        pageAlertProps = {
            title: 'Test Title',
            message: 'Test message',
            status: 'success'
        };
    });

    const renderComponent = () => render(<PageAlert {...pageAlertProps} />);

    it("Success alerts should have no accessibility violations", async () => {
        const { container } = renderComponent();

        const results = await axe(container)

        expect(results).toHaveNoViolations()
    });

    it("Info alerts should have no accessibility violations", async () => {
        pageAlertProps.status = 'info';
        const { container } = renderComponent();

        const results = await axe(container)

        expect(results).toHaveNoViolations()
    });

    it("Warning alerts should have no accessibility violations", async () => {
        pageAlertProps.status = 'warning';
        const { container } = renderComponent();

        const results = await axe(container)

        expect(results).toHaveNoViolations()
    });

    it("Error alerts should have no accessibility violations", async () => {
        pageAlertProps.status = 'error';
        const { container } = renderComponent();

        const results = await axe(container)

        expect(results).toHaveNoViolations()
    });
});