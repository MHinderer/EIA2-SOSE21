/*
Aufgabe: <Abschlussarbeit S21>
Name: <Moritz Hinderer>
Matrikel: <267208>
Datum: <19.07.2021>
Quellen: <Kommilitonen mit denen ich zusammengearbeitet habe: Julian Himmel, Tristan Trefz, Martin Fuhr, weitere Quellen: Inverted Classroon, Internet>
*/

namespace Endabgabe {

    export interface ICellOptions {
        rowspan?: number;
        th?: boolean;
    }

    export class UIHelper {
        // updates ui element by its id
        public static updateById(id: string, text: string): void {
            const el: HTMLElement | null = document.getElementById(id);
            if (!el) { return; }
            el.innerHTML = text;
        }

        public static createSpan(id: string, text: string): HTMLSpanElement {
            const s: HTMLSpanElement = document.createElement("span");
            s.setAttribute("id", id);
            s.innerHTML = text;
            return s;
        }

        public static createInput(id: string, text: string, cb: (val: string) => void): HTMLInputElement {
            const i: HTMLInputElement = document.createElement("input");
            i.setAttribute("id", id);
            i.value = text;
            i.addEventListener("change", (e: Event) => cb((e.target as HTMLInputElement).value));
            return i;
        }

        public static createTable(...rows: HTMLTableRowElement[]): HTMLTableElement {
            const table: HTMLTableElement = document.createElement("table");
            table.setAttribute("id", "player-table");
            rows.forEach((r) => {
                table.appendChild(r);
            });
            return table;
        }

        public static createRow(...cells: HTMLTableCellElement[]): HTMLTableRowElement {
            const tr: HTMLTableRowElement = document.createElement("tr");
            cells.forEach((c) => {
                tr.appendChild(c);
            });
            return tr;
        }

        public static createCell(element: HTMLElement, options: ICellOptions = {
            rowspan: 1,
            th: false
        }): HTMLTableCellElement {
            let booleanVal: string = optionsBoolean();
            function optionsBoolean(): string {
                if (options.th == true) {
                    return "th";
                } else {
                    return "td";
                }
            }
            const td: HTMLTableCellElement = <HTMLTableCellElement> document.createElement(booleanVal);
            td.appendChild(element);
            if (options) {
                const r: number | string = options.rowspan || "";
                td.setAttribute("rowspan", r.toString());
            }
            return td;
        }
    }
}