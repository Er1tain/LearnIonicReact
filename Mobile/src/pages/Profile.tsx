import { IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar, useIonLoading, useIonRouter } from "@ionic/react";
import { Link } from "react-router-dom";
import '../styles/pages/Profile.css';
import { useState } from "react";
import { VideoCapturePlus, VideoCapturePlusOptions } from "@ionic-native/video-capture-plus";
import styled from "styled-components";
import Editor from "../components/Profile/Editor";

const PanelButtons = styled.div`
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    `

const Button = (background: string, color: string)=>{
   return styled.button`
    background: ${background};
    color: ${color};
    font-size: 22px;
    border-radius: 9px;
    height: 2rem;
   `
}

export default function Profile() {
    const nav = useIonRouter();

    const MainButton = Button("lime", "black");
    const ChangeButton = Button("orange", "white");

    const [visibleEditor, setVisible] = useState<boolean>(false);
    const ViewVanishEditor = ()=>{
        if (visibleEditor) setVisible(false)
        else setVisible(true)
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Профиль</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {visibleEditor && <Editor setVisible={setVisible}/>}
                <PanelButtons>
                    <MainButton onClick={()=>nav.goBack()}>На главную</MainButton>
                    <ChangeButton onClick={()=>ViewVanishEditor()}>Редактировать</ChangeButton>
                </PanelButtons>
            </IonContent>
        </IonPage>
    )

}