import React, { useState } from 'react';
import styled from 'styled-components';

import { IMPRequestPayment, registerPayment } from '../../Utils/payment';

const InputContainer = styled.form`
  width: 80%;
  height: 100%;
  max-height: 960px;
  max-width: 960px;
  margin: auto;
  padding: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.cBlue};
  z-index: 200;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
  @media all and (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 1024px) {
    width: 100%;
    height: 100%;
  }
`;

const CloseBox = styled.div`
  position: absolute;
  top: 16px;
  right: -8px;
  ${(props) => props.theme.setMediaQuery(1)};
  color: white;
  width: 100px;
  height: 100px;
  text-align: center;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;
const Inputcontainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const InputRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0px;
`;
const InputColumn = styled.div`
  ${(props) => props.theme.setMediaQuery(5)};
  width: 100%;
  &:nth-child(1) {
    width: 30%;
  }
`;

const InputTitle = styled.div`
  font-weight: bold;
  width: 100%;
  ${(props) => props.theme.setMediaQuery(3)};
`;

const Input = styled.input`
  margin-top: 4px;
  margin-left: 10px;
  border-radius: 4px;
  width: 100%;
  height: 36px;
  padding: 5px;
  border: none;
  padding: 10px;
`;

const SubmitButton = styled.button`
  margin-top: 44.5px;
  width: 80%;
  border-radius: 5px;
  background-color: #ffffff;
  ${(props) => props.theme.setMediaQuery(3)};
  font-weight: bold;
  color: #007bec;
  cursor: pointer;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.5) 4px 4px 10px 0px !important;
`;

const MessageBox = styled.div`
  font-weight: bold;
  width: 100%;
  text-align: left;
  ${(props) => props.theme.setMediaQuery(1)};
`;

const ReceiptContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ReceiptPriceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 0.5px solid white;
  margin-top: 10px;
`;

const ReceiptRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  ${(props) => props.theme.setMediaQuery(5)};
`;
const ReceiptColumn = styled.div`
  width: 100%;
  font-weight: lighter;
  ${(props) => props.theme.setMediaQuery(5)};
  &:nth-child(2) {
    width: 80%;
    text-align: right;
  }
`;

const ReceiptPrice = styled(MessageBox)``;

const Won = styled.span`
  ${(props) => props.theme.setMediaQuery(5)};
  font-weight: lighter;
`;

const PaymentContainer = styled.div``;

const PaymentInput = styled.input`
  color: white;
`;

const PaymentRow = styled.div`
  margin: 10px 0px;
`;
const PaymentLabel = styled.label`
  margin-left: 10px;
  ${(props) => props.theme.setMediaQuery(5)};
`;

const RegisterModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [paymentMethod, setPayment] = useState('kakaopay');

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
        pay_method: paymentMethod,
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
      <CloseBox onClick={(e) => onClose()}>X</CloseBox>
      <MessageBox>
        결제만 마치면 <br />
        바로 등록이 완료 됩니다.
      </MessageBox>
      <Inputcontainer>
        <InputRow>
          <InputTitle>수강생 정보</InputTitle>
        </InputRow>
        <InputRow>
          <InputColumn>이름</InputColumn>
          <InputColumn>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="이름을 입력해주세요"
            ></Input>
          </InputColumn>
        </InputRow>

        <InputRow>
          <InputColumn>이메일</InputColumn>
          <InputColumn>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@codershigh.com"
            ></Input>
          </InputColumn>
        </InputRow>

        <InputRow>
          <InputColumn>전화번호</InputColumn>
          <InputColumn>
            <Input
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              placeholder="전화번호를 입력하세요 ('-' 없이 입력)"
            ></Input>
          </InputColumn>
        </InputRow>
      </Inputcontainer>
      <ReceiptContainer>
        <ReceiptRow>
          <InputTitle>결제 금액</InputTitle>
        </ReceiptRow>
        <ReceiptRow>
          <ReceiptPrice>
            489,000 <Won>원</Won>
          </ReceiptPrice>
        </ReceiptRow>
        <ReceiptPriceContainer>
          <ReceiptRow>
            <ReceiptColumn>코더스하이 iOS 앱 개발 코스 수강료</ReceiptColumn>
            <ReceiptColumn>550,000원</ReceiptColumn>
          </ReceiptRow>
          <ReceiptRow>
            <ReceiptColumn>출시 기념 오프닝 할인</ReceiptColumn>
            <ReceiptColumn>(-) 61,000원</ReceiptColumn>
          </ReceiptRow>
        </ReceiptPriceContainer>
        <ReceiptRow>
          <InputTitle>결제 방식</InputTitle>
        </ReceiptRow>
        <PaymentContainer>
          <PaymentRow onClick={() => setPayment('kakaopay')}>
            <PaymentInput
              type="radio"
              id="kakaopay"
              name="payment"
              value="kakaopay"
              checked={paymentMethod === 'kakaopay'}
              onChange={() => {}}
            ></PaymentInput>
            <PaymentLabel>카카오페이</PaymentLabel>
          </PaymentRow>
          <PaymentRow onClick={() => setPayment('bank')}>
            <PaymentInput
              type="radio"
              id="bank"
              name="payment"
              value="bank"
              checked={paymentMethod === 'bank'}
              onChange={() => {}}
            ></PaymentInput>
            <PaymentLabel>무통장 입금</PaymentLabel>
          </PaymentRow>
        </PaymentContainer>
      </ReceiptContainer>
      <SubmitButton
        onClick={async (e) => {
          e.preventDefault();
          if (checkValidation()) {
            if (paymentMethod === 'kakaopay') {
              await requestPay();
            } else if (checkValidation() && paymentMethod === 'bank') {
              alert('송금이 가능한 계좌를 알려드리겠습니다.');
              onClose();
            }
          }
        }}
      >
        결제 하기
      </SubmitButton>
    </InputContainer>
  );
};

export default RegisterModal;
