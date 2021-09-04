/* Import React Components */
import { useState } from "react";

/* Import Ionic Components */
import {
    IonList,
    IonItem,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    IonModal,
    IonButton,
} from "@ionic/react";

/* UserDataList Component */
const UserDataList: React.FC<{ data: string[] }> = ({ data }) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [userModalDetails, setUserModalDetails] = useState<any>([]);

    const handlerModalShow = () => {
        setShowModal(!showModal);
    };

    const handlerUserDetails = (email: string) => {
        const userDetails = data.find((user: any) => user.email === email);
        setUserModalDetails(userDetails);
    };

    return (
        <>
            {data.map((user: any) => (
                <div key={user.email}>
                    <IonList className="ion-padding">
                        <IonGrid>
                            <IonRow className="ion-justify-content-center">
                                <IonCol size="9">
                                    <IonItem>
                                        <IonLabel className="ion-text-center">
                                            {user.email}
                                        </IonLabel>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonButton
                                className="ion-padding"
                                onClick={() => {
                                    handlerModalShow();
                                    handlerUserDetails(user.email);
                                }}
                                expand="block"
                                fill="outline"
                                size="default"
                            >
                                Show User Details
                            </IonButton>
                        </IonGrid>
                    </IonList>
                    <IonModal isOpen={showModal}>
                        <IonGrid>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel className="ion-text-center">
                                            First Name :{" "}
                                            {userModalDetails.firstname}
                                        </IonLabel>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel className="ion-text-center">
                                            Last Name :{" "}
                                            {userModalDetails.lastname}
                                        </IonLabel>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel className="ion-text-center">
                                            Job : {userModalDetails.job}
                                        </IonLabel>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonButton
                                className="ion-padding"
                                onClick={handlerModalShow}
                                expand="block"
                                fill="outline"
                                size="small"
                            >
                                Back
                            </IonButton>
                        </IonGrid>
                    </IonModal>
                </div>
            ))}
        </>
    );
};

export default UserDataList;
