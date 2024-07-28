import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import styled from 'styled-components';
import logo from '../assets/images/png/logo.png';

const Page = styled.div`
  background: conic-gradient(from 179.88deg at 49.87% 37.41%, #C3D6F7 0deg, #BACFF3 50.4deg, #81A1DC 360deg);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`
const Logo = styled.div`
  background-image: url(${logo});
  width: 330px;
  height: 120px;
  margin-top: 21%;
`

export default function Welcome() {
 
  return (
    <Page>
      <Logo/>
    </Page>
  );
};
