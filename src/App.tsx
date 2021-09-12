/* Import hooks from React */
import { useState, useEffect } from "react";

/* Import hooks from redux */
import { useSelector } from "react-redux";

/* Import utils */
import isEmpty from './utils/isEmpty'

/* Import Components */
import Header from "./components/Header";
import UserDataList from "./components/UserDataList";
import FormUser from "./components/FormUser";

/* Import Ionic Components */
import {
    IonApp,
    IonPage,
    IonContent,
    IonAlert,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonModal,
} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

/* App Component */
const App: React.FC = () => {
    const usersData = useSelector((state: any) => state.userReducer);
    const usersErrorData = useSelector((state: any) => state.userErrorReducer);
    const [errorConnectionMessage, setErrorConnectionMessage] =
        useState<string>("");
    const [showModalForm, setShowModalForm] = useState<boolean>(false);
    
    /* Clear message Error */    
    const clearError = () => {
        setErrorConnectionMessage("");
    };

    /* Handle modal form to add user */
    const handleModalForm = () => {
        setShowModalForm(!showModalForm);
    };

    return (
        <IonApp>
            <IonAlert
                isOpen={!!errorConnectionMessage}
                message={`We encountered some problems : ${errorConnectionMessage}`}
                buttons={[{ text: "OK", handler: clearError }]}
            />
            <IonModal isOpen={showModalForm}>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <FormUser />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonModal>
            <IonPage>
                <Header />
                <IonContent>
                    {!isEmpty(usersData) && <UserDataList usersData={usersData} />}
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonButton
                                    className="ion-margin-top ion-padding"
                                    expand="block"
                                    onClick={handleModalForm}
                                >
                                    + Add User
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonPage>
        </IonApp>
    );
};

export default App;
