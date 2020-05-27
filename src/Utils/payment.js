import axios from 'axios';

export function IMPRequestPayment(IMP, params) {
  return new Promise((resolve, reject) => {
    IMP.init('imp79780451');
    IMP.request_pay(params, (rsp) => {
      // callback
      if (rsp.success) {
        const {
          pay_method,
          merchant_uid,
          name,
          buyer_email,
          buyer_name,
          buyer_tel,
          imp_uid
        } = rsp;
        resolve({
          pay_method,
          merchant_uid,
          name,
          buyer_email,
          buyer_name,
          buyer_tel,
          imp_uid
        });
      } else {
        reject(new Error('아임포트 결제 실패'));
      }
    });
  });
}

export async function registerPayment(params) {
  console.log(params);
  axios
    .post('http://codershigh.dscloud.biz:14000/payment', params)
    .then((result) => {
      if (result.status === 200) {
        alert('결제 성공');
        window.location.reload();
      } else {
        alert('결제 실패');
        window.location.reload();
      }
    })
    .catch((error) => alert(error.message));
}
