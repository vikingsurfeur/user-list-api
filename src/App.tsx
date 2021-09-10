/* Import useState from React */
import React, { useState, useEffect } from "react";

/* Import Components */
import Header from "./components/Header";
import UserDataList from "./components/UserDataList";
import FormUser from "./components/FormUser";

/* Import Axios */
import axios from "axios";


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

/* Define URL environment constant*/
const { REACT_APP_API_URL_GET_USER } = process.env;

/* App Component */
const App: React.FC = () => {
    const [data, setData] = useState<string[]>([]);
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

    /* Fetch User Data */
    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await axios({
                    method: "GET",
                    url: `${REACT_APP_API_URL_GET_USER}`,
                    responseType: "json",
                    headers: {
                        "Content-type": "application/ld+json",
                        "Accept": "application/ld+json",
                    }
                });

                if (response.status === 200) {
                    setData(response.data["hydra:member"]);
                    console.log(response.data)
                } else {
                    setErrorConnectionMessage(`${response.statusText}`);
                    console.error(errorConnectionMessage);
                }
            } catch (error: any) {
                setErrorConnectionMessage(`${error.message}`);
                console.error(errorConnectionMessage);
            }
        };

        getUserData();
    }, [errorConnectionMessage]);

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
                    <UserDataList data={data} />
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
