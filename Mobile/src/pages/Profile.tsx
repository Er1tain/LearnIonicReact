import { IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar, useIonLoading, useIonRouter } from "@ionic/react";
import { Link } from "react-router-dom";
import '../styles/pages/Profile.css';
import { useState } from "react";
import { VideoCapturePlus, VideoCapturePlusOptions } from "@ionic-native/video-capture-plus";
import styled from "styled-components";

const PanelButtons = styled.div`
    display: flex;
    flex-direction: column;
    

`

export default function Profile() {
    const nav = useIonRouter();
    const [state, setState] = useState<string>();
    
    const Change = ()=>{
        if (state == '') setState('Отредактировано')
        else setState('');
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Профиль</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonText>Настройки</IonText>
                <PanelButtons>
                    <IonText>{state}</IonText>
                    <IonButton color="secondary" onClick={Change}>Редактировать</IonButton>
                    <IonButton onClick={()=>nav.goBack()}>На главную</IonButton>
                </PanelButtons>
            </IonContent>
        </IonPage>
    )

}