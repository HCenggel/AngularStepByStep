import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    template: `
        <main class="p-10 dark:bg-black" style="min-height: 100vh;">
            <router-outlet/>
        </main>
    `
})
export class AppComponent {
}
