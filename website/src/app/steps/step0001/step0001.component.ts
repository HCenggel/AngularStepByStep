import {Component} from '@angular/core';
import {CodeViewerComponent} from '../../components/code-viewer/code-viewer.component';
import {RouterLink} from '@angular/router';
import {PagePagerComponent} from '../../components/page-pager/page-pager.component';

@Component({
    selector: 'app-step0001',
    imports: [
        CodeViewerComponent,
        RouterLink,
        PagePagerComponent
    ],
    templateUrl: './step0001.component.html',
    styleUrl: './step0001.component.scss'
})
export class Step0001Component {
    public str1 = "// 这是一个示例代码块\n" +
        "      function greet(name) {\n" +
        "        return `Hello, ${name}!`;\n" +
        "      }\n" +
        "      console.log(greet('World'));"
}
