import './index.styl'

class mqyunToast {

  constructor (setting) {
    let initSetting = {
      type: 'info',
      message: '',
      position: 'top'
    }
    this.key = Date.parse(new Date()) / 1000 + Math.floor(Math.random() * (1 - 1000) + 1000);
    this.setting = {
      ...initSetting,
      ...setting
    }
    this._init();
  }

  _init () {
    let _set = this.setting;
    this.toastObj = document.createElement('div');
    this.toastObj.setAttribute('class', `mqyun-toast-box ${_set.type} ${_set.position}`);
    this.toastObj.setAttribute('key', this.key);
    this.toastObj.innerHTML = `${_set.message}`;
  }

  show () {
    document.body.appendChild(this.toastObj);
  }

}

export default mqyunToast

/**
 * toast类型：type: ['primary', 'info', 'danger', 'success', 'warning', 'default']
 * toast信息：message
 */
