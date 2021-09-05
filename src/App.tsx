/* Import useState from React */
import React, { useState, useEffect } from "react";

/* Import Components */
import Header from "./components/Header";
import UserDataList from "./components/UserDataList";

/* Import Axios */
import axios from "axios";

/* Import API URL */
import { API_URL } from "./constants/apiUrlConf";

/* Import Ionic Components */
import { IonApp, IonPage, IonContent, IonAlert } from "@ionic/react";

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
    const [data, setData] = useState<string[]>([]);
    const [errorConnectionMessage, setErrorConnectionMessage] =
        useState<string>("");

    const clearError = () => {
        setErrorConnectionMessage("");
    };

    /* Fetch User Data */
    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await axios({
                    method: "GET",
                    url: `${API_URL}`,
                    responseType: "json",
                });

                if (response.status === 200) {
                    setData(response.data);
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
            <IonPage>
                <Header />
                <IonContent>
                    <UserDataList data={data} />
                </IonContent>
            </IonPage>
        </IonApp>
    );
};

export default App;
