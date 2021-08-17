export default class DaysView extends View {
    constructor(picker: any);
    dow: ChildNode;
    grid: ChildNode;
    setOptions(options: any): void;
    minDate: any;
    maxDate: any;
    datesDisabled: any;
    daysOfWeekDisabled: any;
    daysOfWeekHighlighted: any;
    todayHighlight: any;
    weekStart: any;
    weekEnd: any;
    locale: any;
    dayNames: any;
    switchLabelFormat: any;
    switchLabel: any;
    beforeShow: any;
    calendarWeeks: {
        element: ChildNode;
        dow: ChildNode;
        weeks: ChildNode;
    };
    updateFocus(): void;
    first: number;
    last: number;
    start: number;
    focused: any;
    updateSelection(): void;
    selected: any;
    range: any;
    render(): void;
    today: number;
    disabled: any[];
    refresh(): void;
    refreshFocus(): void;
}
import View from "./View.js";
