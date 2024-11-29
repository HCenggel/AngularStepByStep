import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    template: `
        <main class="p-10 dark:bg-black" style="min-height: 100vh;">
            <router-outlet/>
        </main>
        <div class="fixed top-0 right-0 m-4">
            <button id="toggleTheme" class="px-4 py-2 bg-gray-900 text-gray-50 rounded-lg shadow-md hover:bg-gray-600 focus:outline-none"
                    (click)="toggleTheme()">
                D/H
            </button>
        </div>
    `
})
export class AppComponent {

    constructor() {
        if (window.localStorage.getItem('theme')) {
            document.querySelector('html')?.classList.add('dark');
        }
    }

    toggleTheme() {
        document.querySelector('html')?.classList.toggle('dark');
        if (window.localStorage.getItem('theme')) {
            window.localStorage.removeItem('theme')
        } else {
            window.localStorage.setItem('theme', 'dark')
        }
    }
}
