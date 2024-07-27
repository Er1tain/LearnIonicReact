import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import styled from 'styled-components';

const PanelButtons = styled.div`
    display: flex;
    flex-direction: column;
`

const Home: React.FC = () => {
  const nav = useIonRouter()

  const NavToProfile = ()=>{
    nav.push('/profile');
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Главная</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer /> */}
        <PanelButtons>
          <IonButton onClick={()=>NavToProfile()}>Профиль</IonButton>
        </PanelButtons>
      </IonContent>
    </IonPage>
  );
};

export default Home;
