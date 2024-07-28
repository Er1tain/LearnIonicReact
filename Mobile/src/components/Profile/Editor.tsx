import { IonButton, IonContent, IonInput, IonLabel, IonPage } from "@ionic/react";
import styled from "styled-components";

const Frame = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 20rem;
    height: 5remvh;
    gap: 1rem;
    border-radius: 9px;
`

const Input = styled(IonInput)`
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`


export default function Editor(props : any) {
    return (
        <Frame>
            <IonButton onClick={()=>props.setVisible()}>Закрыть</IonButton>
            <Content>
                <IonLabel>Фамилия: </IonLabel><Input/>
                <IonLabel>Имя: </IonLabel><Input/>
                <IonLabel>Отчество: </IonLabel><Input/>
                <IonButton>Изменить</IonButton>
            </Content>           
        </Frame>
    )
}