import { DataService } from '../data.service';
import { Component, ViewEncapsulation, OnInit, Inject, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { dataSource } from './data';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  @ViewChild('spreadsheet')
  public spreadsheetObj: SpreadsheetComponent;
  public data: Object[] = dataSource;
  public openUrl = 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open';
  public saveUrl = 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save';

  public sportsData: Object[] = [
    { Id: 'Game1', Game: 'American Football' },
    { Id: 'Game2', Game: 'Badminton' },
    { Id: 'Game3', Game: 'Basketball' },
    { Id: 'Game4', Game: 'Cricket' },
    { Id: 'Game5', Game: 'Football' },
    { Id: 'Game6', Game: 'Golf' },
    { Id: 'Game7', Game: 'Hockey' },
    { Id: 'Game8', Game: 'Rugby' },
    { Id: 'Game9', Game: 'Snooker' },
    { Id: 'Game10', Game: 'Tennis' }
];
public fields: Object = { text: 'Game', value: 'Id' };

  constructor(
    private dataService: DataService, 
    //@Inject('sourceFiles') private sourceFiles: any
    ) 
    {
      //sourceFiles.files = ['spreadsheet.css'];
    }

  public ngOnInit(): void {
    this.dataService.updateActiveItem('controls');
  }

  spreadsheetCreated() {
    this.spreadsheetObj.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
    this.spreadsheetObj.cellFormat({ fontWeight: 'bold' }, 'E31:F31');
    this.spreadsheetObj.cellFormat({ textAlign: 'right' }, 'E31');
    this.spreadsheetObj.numberFormat('$#,##0.00', 'F2:F31');
  }
}
