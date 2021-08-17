/**
 * Class representing a date picker
 */
export default class Datepicker {
    /**
     * Format Date object or time value in given format and language
     * @param  {Date|Number} date - date or time value to format
     * @param  {String|Object} format - format string or object that contains
     * toDisplay() custom formatter, whose signature is
     * - args:
     *   - date: {Date} - Date instance of the date passed to the method
     *   - format: {Object} - the format object passed to the method
     *   - locale: {Object} - locale for the language specified by `lang`
     * - return:
     *     {String} formatted date
     * @param  {String} [lang=en] - language code for the locale to use
     * @return {String} formatted date
     */
    static formatDate(date: Date | number, format: string | any, lang?: string): string;
    /**
     * Pasre date string
     * @param  {String|Date|Number} dateStr - date string, Date object or time
     * value to parse
     * @param  {String|Object} format - format string or object that contains
     * toValue() custom parser, whose signature is
     * - args:
     *   - dateStr: {String|Date|Number} - the dateStr passed to the method
     *   - format: {Object} - the format object passed to the method
     *   - locale: {Object} - locale for the language specified by `lang`
     * - return:
     *     {Date|Number} parsed date or its time value
     * @param  {String} [lang=en] - language code for the locale to use
     * @return {Number} time value of parsed date
     */
    static parseDate(dateStr: string | Date | number, format: string | any, lang?: string): number;
    /**
     * @type {Object} - Installed locales in `[languageCode]: localeObject` format
     * en`:_English (US)_ is pre-installed.
     */
    static get locales(): any;
    /**
     * Create a date picker
     * @param  {Element} element - element to bind a date picker
     * @param  {Object} [options] - config options
     * @param  {DateRangePicker} [rangepicker] - DateRangePicker instance the
     * date picker belongs to. Use this only when creating date picker as a part
     * of date range picker
     */
    constructor(element: Element, options?: any, rangepicker?: any);
    element: Element;
    config: {
        buttonClass: string;
        container: HTMLElement;
        defaultViewDate: number;
        maxDate: any;
        minDate: any;
    } & {
        language: any;
        locale: any;
        format: any;
        weekStart: any;
        weekEnd: number;
        minDate: any;
        maxDate: any;
        datesDisabled: any;
        defaultViewDate: any;
        daysOfWeekDisabled: any;
        daysOfWeekHighlighted: any;
        maxNumberOfDates: number;
        multidate: boolean;
        dateDelimiter: string;
        maxView: any;
        startView: any;
        prevArrow: NodeListOf<ChildNode>;
        nextArrow: NodeListOf<ChildNode>;
        disableTouchKeyboard: boolean;
        orientation: {
            x: any;
            y: any;
        };
        todayBtnMode: any;
    };
    _options: any;
    inline: boolean;
    inputField: Element;
    dates: any;
    rangepicker: any;
    picker: Picker;
    /**
     * @type {Boolean} - Whether the picker element is shown. `true` whne shown
     */
    get active(): boolean;
    /**
     * Set new values to the config options
     * @param {Object} options - config options to update
     */
    setOptions(options: any): void;
    /**
     * Show the picker element
     */
    show(): void;
    /**
     * Hide the picker element
     * Not avilable on inline picker
     */
    hide(): void;
    /**
     * Destroy the Datepicker instance
     * @return {Detepicker} - the instance destroyed
     */
    destroy(): any;
    /**
     * Get the selected date(s)
     *
     * The method returns a Date object of selected date by default, and returns
     * an array of selected dates in multidate mode. If format string is passed,
     * it returns date string(s) formatted in given format.
     *
     * @param  {String} [format] - Format string to stringify the date(s)
     * @return {Date|String|Date[]|String[]} - selected date(s), or if none is
     * selected, empty array in multidate mode and untitled in sigledate mode
     */
    getDate(format?: string): Date | string | Date[] | string[];
    /**
     * Set selected date(s)
     *
     * In multidate mode, you can pass multiple dates as a series of arguments
     * or an array. (Since each date is parsed individually, the type of the
     * dates doesn't have to be the same.)
     * The given dates are used to toggle the select status of each date. The
     * number of selected dates is kept from exceeding the length set to
     * maxNumberOfDates.
     *
     * With clear: true option, the method can be used to clear the selection
     * and to replace the selection instead of toggling in multidate mode.
     * If the option is passed with no date arguments or an empty dates array,
     * it works as "clear" (clear the selection then set nothing), and if the
     * option is passed with new dates to select, it works as "replace" (clear
     * the selection then set the given dates)
     *
     * When render: false option is used, the method omits re-rendering the
     * picker element. In this case, you need to call refresh() method later in
     * order for the picker element to reflect the changes. The input field is
     * refreshed always regardless of this option.
     *
     * When invalid (unparsable, repeated, disabled or out-of-range) dates are
     * passed, the method ignores them and applies only valid ones. In the case
     * that all the given dates are invalid, which is distiguished from passing
     * no dates, the method considers it as an error and leaves the selection
     * untouched.
     *
     * @param {...(Date|Number|String)|Array} [dates] - Date strings, Date
     * objects, time values or mix of those for new selection
     * @param {Object} [options] - function options
     * - clear: {boolean} - Whether to clear the existing selection
     *     defualt: false
     * - render: {boolean} - Whether to re-render the picker element
     *     default: true
     * - autohide: {boolean} - Whether to hide the picker element after re-render
     *     Ignored when used with render: false
     *     default: config.autohide
     */
    setDate(...args: any[]): void;
    /**
     * Update the selected date(s) with input field's value
     * Not avilable on inline picker
     *
     * The input field will be refreshed with properly formatted date string.
     *
     * @param  {Object} [options] - function options
     * - autohide: {boolean} - whether to hide the picker element after refresh
     *     default: false
     */
    update(options?: any): void;
    /**
     * Refresh the picker element and the associated input field
     * @param {String} [target] - target item when refreshing one item only
     * 'picker' or 'input'
     */
    refresh(target?: string): void;
    /**
     * Enter edit mode
     * Not avilable on inline picker or when the picker element is hidden
     */
    enterEditMode(): void;
    editMode: boolean;
    /**
     * Exit from edit mode
     * Not avilable on inline picker
     * @param  {Object} [options] - function options
     * - update: {boolean} - whether to call update() after exiting
     *     If false, input field is revert to the existing selection
     *     default: false
     */
    exitEditMode(options?: any): void;
}
import Picker from "./picker/Picker.js";
