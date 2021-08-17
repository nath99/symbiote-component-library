/**
 * Class representing a date range picker
 */
export default class DateRangePicker {
    /**
     * Create a date range picker
     * @param  {Element} element - element to bind a date range picker
     * @param  {Object} [options] - config options
     */
    constructor(element: Element, options?: any);
    element: Element;
    inputs: any;
    allowOneSidedRange: boolean;
    datepickers: Datepicker[];
    /**
     * @type {Array} - selected date of the linked date pickers
     */
    get dates(): any[];
    /**
     * Set new values to the config options
     * @param {Object} options - config options to update
     */
    setOptions(options: any): void;
    /**
     * Destroy the DateRangePicker instance
     * @return {DateRangePicker} - the instance destroyed
     */
    destroy(): DateRangePicker;
    /**
     * Get the start and end dates of the date range
     *
     * The method returns Date objects by default. If format string is passed,
     * it returns date strings formatted in given format.
     * The result array always contains 2 items (start date/end date) and
     * undifined is used for unselected side. (e.g. If none is selected,
     * the result will be [undifined, undifined]. If only the end date is set
     * when allowOneSidedRange config option is true, [undifined, endDate] will
     * be returned.)
     *
     * @param  {String} [format] - Format string to stringify the dates
     * @return {Array} - Start and end dates
     */
    getDates(format?: string): any[];
}
import Datepicker from "./Datepicker.js";
