import {Component, input, InputSignal} from '@angular/core';

@Component({
    selector: 'ngx-code-viewer',
    imports: [],
    template: `
        <div class="max-w-full overflow-x-auto p-4 bg-gray-800 text-white rounded-lg shadow-lg">
            <pre class="whitespace-pre-wrap"><code class="text-base" [innerHTML]="code()"></code></pre>
        </div>
    `,
    styles: ``
})
export class CodeViewerComponent {
    public code: InputSignal<string> = input.required<string>();
}
