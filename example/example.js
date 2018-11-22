import mqyunComponents from '../index'

let mqyunToast = new mqyunComponents.mqyunToast({
  type: 'success',
  message: '我是一条message哦~',
  position: 'top'
});
mqyunToast.show();