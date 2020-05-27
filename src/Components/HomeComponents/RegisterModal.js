import React, { useState } from 'react';
import styled from 'styled-components';
import { IMPRequestPayment, registerPayment } from '../../Utils/payment';

const InputContainer = styled.form`
  width: 80%;
  max-width: 960px;
  margin: auto;
  padding: ${(props) => props.theme.padding};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.cBlue};
`;

const InputRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 20px 0px;
`;

const ColumnLabel = styled.label`
  width: 100%;
`;

const Input = styled.input`
  margin-top: 4px;
  border: 1px solid black;
  border-radius: 4px;
  width: 100%;
  height: 36px;
  padding: 5px;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 36px;
  border-radius: 4px;
  background-color: #363636;
  color: white;
  font-weight: bold;
`;

const MessageBox = styled.div`
  ${(props) => props.theme.setMediaQuery(3)};
`;

const RegisterModal = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');

  const checkValidation = () => {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(String(email).toLowerCase())) {
      alert('이메일을 올바른 형식으로 입력해주세요');
      return false;
    } else if (name.trim() === '') {
      alert('이름을 입력해주세요');
      return false;
    } else if (tel.trim() === '') {
      alert('전화번호를 입력해주세요');
      return false;
    } else {
      return true;
    }
  };

  const requestPay = async () => {
    try {
      const IMP = window.IMP;
      const payment = await IMPRequestPayment(IMP, {
        pg: 'kakaopay',
        pay_method: 'card',
        merchant_uid: 'merchant_' + new Date().getTime(),
        name: '코더스하이 온라인코스(오픈 특가)',
        amount: 489000,
        buyer_email: email,
        buyer_name: name,
        buyer_tel: tel
      });
      console.log(payment);
      await registerPayment({
        ...payment,
        name: '코더스하이 온라인코스'
      });
      alert('결제가 성공하였습니다.');
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <InputContainer>
      <MessageBox>
        제품명 : 코더스하이 온라인코스 <br />
        금 액 : 489,000원
        <br />
        지불 방법 : 카카오페이
      </MessageBox>
      <InputRow>
        <ColumnLabel>
          <label>
            이름
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="이름을 입력해주세요"
            ></Input>
          </label>
        </ColumnLabel>
      </InputRow>

      <InputRow>
        <ColumnLabel>
          <label>
            이메일
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="예) example@codershigh.com"
            ></Input>
          </label>
        </ColumnLabel>
      </InputRow>

      <InputRow>
        <ColumnLabel>
          <label>
            전화번호
            <Input
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              placeholder="전화번호를 입력하세요"
            ></Input>
          </label>
        </ColumnLabel>
      </InputRow>
      <SubmitButton
        onClick={async (e) => {
          e.preventDefault();
          if (checkValidation()) {
            await requestPay();
          }
        }}
      >
        결제 하기
      </SubmitButton>
    </InputContainer>
  );
};

export default RegisterModal;
