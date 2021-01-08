import {$} from '@core/dom';
import {ExcelStateComponent} from '@core/ExcelStateComponent';
import {defaultStyle} from '../../constants';
import {createToolbar} from './toolbar.template';
export class Toolbar extends ExcelStateComponent {
  static className = 'excel__toolbar';

  constructor($root, options) {
	  super($root, {
		  name: 'Toolbar',
		  listeners: ['click'],
		  subscribe: ['currentStyles'],
		  ...options
	  });
  }

  prepare() {
	  this.initialState(defaultStyle)
  }

  get template() {
    return createToolbar(this.state);
  }

  toHTML() {
    return this.template;
  }

  storeChanged({currentStyles}) {
	  this.setState(currentStyles)
  }

  onClick(event) {
    const $target = $(event.target);

    if ($target.data.type === 'button') {
	  const value = JSON.parse($target.data.value);
      this.$emit('toolbar:applyStyle', value);

    //   const key = Object.keys(value)[0];
    //   this.setState({[key]: value[key]});
    }
  }
}
