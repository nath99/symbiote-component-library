export default class Picker {
    constructor(datepicker: any);
    datepicker: any;
    element: ChildNode;
    main: any;
    controls: {
        title: any;
        prevBtn: any;
        viewSwitch: any;
        nextBtn: any;
        todayBtn: any;
        clearBtn: any;
    };
    viewDate: any;
    views: (DaysView | MonthsView | YearsView)[];
    currentView: DaysView | MonthsView | YearsView;
    setOptions(options: any): void;
    detach(): void;
    show(): void;
    active: boolean;
    hide(): void;
    place(): void;
    setViewSwitchLabel(labelText: any): void;
    setPrevBtnDisabled(disabled: any): void;
    setNextBtnDisabled(disabled: any): void;
    changeView(viewId: any): Picker;
    _renderMethod: string;
    changeFocus(newViewDate: any): Picker;
    update(): Picker;
    render(): void;
}
import DaysView from "./views/DaysView.js";
import MonthsView from "./views/MonthsView.js";
import YearsView from "./views/YearsView.js";
