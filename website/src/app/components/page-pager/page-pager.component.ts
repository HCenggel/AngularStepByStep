import {Component, input, InputSignal} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'ngx-page-pager',
    imports: [
        RouterLink
    ],
    template: `
        <div
            class="fixed bottom-0 left-0 flex w-full shadow-lg justify-between items-center p-3 bg-gray-100 rounded-lg mt-10">
            <button
                class="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                [routerLink]="prev()">
                上一步
            </button>
            <button
                class="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                [routerLink]="next()">
                下一步
            </button>
        </div>
    `,
    styles: ``
})
export class PagePagerComponent {
    public prev: InputSignal<string> = input.required<string>();
    public next: InputSignal<string> = input.required<string>();
}
