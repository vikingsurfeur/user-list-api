/* Import Ionic Components */
import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";

/* Header Component */
const Header: React.FC = () => {
    return (
        <IonHeader>
            <IonToolbar color="primary">
                <IonTitle className="ion-text-center">
                    <h1>User List</h1>
                </IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};

export default Header;
