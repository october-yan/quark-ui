webpackJsonp([33],{"M1/m":function(n,e){n.exports="import InputNumber from '../InputNumber';\nimport { Component } from 'react';\nimport CSSModules from 'react-css-modules';\n\nexport default class InputNumberDemo extends Component {\n  \n  onChange = (value) => {\n    console.log('changed', value);\n  }\n\n  render() {\n    return (\n      <div className=\"markdown-block\">\n            <h3>基本</h3>\n            <p>数字输入框</p>\n                <InputNumber  style={{ width: 200 }} min={1} max={10} defaultValue={3} onChange={this.onChange}/>\n             <h3>禁用</h3>\n              <p>数字输入框禁用</p>\n                <InputNumber min={1} max={10} disabled={true} defaultValue={3} />\n             <h3>小数</h3>\n              <p>和原生的数字输入框一样，鼠标离开输入框时自动取值。目前设定小数位两位。</p>\n                <InputNumber min={0} max={10} defaultValue={3} step={1.00} onChange={this.onChange}/>\n             <h3>大小</h3>\n              <p>三种大小的数字输入框。</p>\n                <InputNumber size=\"large\" min={1} max={100000} defaultValue={3} onChange={this.onChange}/>\n                <br /><br />\n                <InputNumber min={1} max={100000} defaultValue={3} onChange={this.onChange} />\n                <br /><br />\n                <InputNumber size=\"small\" min={1} max={100000} defaultValue={3} onChange={this.onChange}/>\n             <h3>格式化展示</h3>\n              <p>展示具有具体含义的数据</p>\n            <InputNumber\n              formatter={value => `$ ${value.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')}`}\n              parser={value => value.replace(/\\$\\s?|(,*)/g, '')}\n              onChange={this.onChange}/>\n              <br /><br />\n            <InputNumber\n                defaultValue={1000}\n                formatter={value => `¥ ${value.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')}`}\n                parser={value => value.replace(/\\¥\\s?|(,*)/g, '')}\n                onChange={this.onChange}/>\n                <br /><br />\n            <InputNumber\n              defaultValue={1}\n              min={0}\n              max={10}\n              formatter={value => `${value} m`}\n              parser={value => value.replace(/[^\\d]/g, '')}\n              onChange={this.onChange}/>\n              <br /><br />\n            <InputNumber\n              defaultValue={1}\n              min={0}\n              max={10}\n              formatter={value => `${value} ㎡`}\n              parser={value => value.replace(/[^\\d]/g, '')}\n              onChange={this.onChange}/>\n              <br /><br />\n            <InputNumber\n              defaultValue={1}\n              min={0}\n              max={10}\n              formatter={value => `${value} t`}\n              parser={value => value.replace(/[^\\d]/g, '')}\n              onChange={this.onChange}/>\n              <br /><br />\n            <InputNumber\n              defaultValue={1}\n              min={0}\n              max={10}\n              formatter={value => `${value} L`}\n              parser={value => value.replace(/[^\\d]/g, '')}\n              onChange={this.onChange}/>\n              <br /><br />\n              <InputNumber\n              defaultValue={1}\n              min={0}\n              max={10}\n              formatter={value => `${value} min`}\n              parser={value => value.replace(/[^\\d]/g, '')}\n              onChange={this.onChange}/>\n              <br /><br />\n              <InputNumber\n              defaultValue={1}\n              min={0}\n              max={1000}\n              formatter={value => `${value} m³`}\n              parser={value => value.replace(/[^\\d]/g, '')}\n              onChange={this.onChange}/>\n      </div>\n    );\n  }\n}\n"}});
//# sourceMappingURL=33.62c4eb4b6631d481d829.js.map