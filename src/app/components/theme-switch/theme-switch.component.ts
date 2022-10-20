import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss']
})
export class ThemeSwitchComponent implements OnInit {

  @Input() isDark: boolean = false;
  @Output() onModeChanged = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onSwitchClicked({ checked }: MatSlideToggleChange) {
    this.onModeChanged.emit(checked);
  }

}
