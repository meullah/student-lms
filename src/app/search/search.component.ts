import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  ngOnInit(): void {}

  // setting some properties for reading CSV file and storing data

  csvRecords: any[] = [];
  orignalRecords: any[] = [];
  header = true;
  selectedOption = '';
  searchBoxValue = '';
  detailsCardData: any;
  page = 1;
  pageSize = 5;

  constructor(private ngxCsvParser: NgxCsvParser) {}

  @ViewChild('fileImportInput', { static: false }) fileImportInput: any;

  // Your applications input change listener for the CSV File
  // it also parses csv data and store then in the form of list of objects
  fileChangeListener($event: any): void {
    // Select the files from the event
    const files = $event.srcElement.files;

    // Parse the file you want to select for the operation along with the configuration
    this.ngxCsvParser
      .parse(files[0], { header: this.header, delimiter: ',' })
      .pipe()
      .subscribe(
        (result: Array<any>) => {
          console.log('Result', result);
          this.csvRecords = result;
          this.orignalRecords = result;
          this.detailsCardData = {};
        },
        (error: NgxCSVParserError) => {
          console.log('Error', error);
        }
      );
  }

  //get the selected option from the HTML selector
  getSelectedOption(value: any) {
    // console.log(value);
    this.selectedOption = value;
    this.searchBoxChanged(this.searchBoxValue);
  }

  // gets the value of the search box | and used filter method of Object
  // to filterout the contents
  searchBoxChanged(value: any) {
    // console.log('search Box Chnged : value : ', value);
    this.searchBoxValue = value;
    // console.log(value);
    if (value == null || value == '') {
      // console.log('heree!!!  heree!!!  heree!!!  heree!!! ');
      this.csvRecords = JSON.parse(JSON.stringify(this.orignalRecords));
      // console.log('CSV Records : ', this.csvRecords);
    } else {
      this.csvRecords = JSON.parse(JSON.stringify(this.orignalRecords));
      this.csvRecords = this.csvRecords.filter((res) => {
        return res[this.selectedOption]
          .toLowerCase()
          .match(value.toLowerCase());
        // console.log(res[this.selectedOption]);
      });
    }
    // console.log(this.csvRecords);
  }

  // used to display data on the cards
  viewDetails(item: any) {
    this.detailsCardData = item;
    console.log('details card data', this.detailsCardData);
  }
}
