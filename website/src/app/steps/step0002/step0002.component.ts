import { Component } from '@angular/core';
import {CodeViewerComponent} from "../../components/code-viewer/code-viewer.component";
import {PagePagerComponent} from "../../components/page-pager/page-pager.component";

@Component({
  selector: 'app-step0002',
    imports: [
        CodeViewerComponent,
        PagePagerComponent
    ],
  templateUrl: './step0002.component.html',
  styleUrl: './step0002.component.scss'
})
export class Step0002Component {

}
