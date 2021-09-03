/* Import Ionic Components */
import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";

const Header: React.FC = () => {
    return (
        <IonHeader>
            <IonToolbar className="ion-padding" color="primary">
                <IonTitle className="ion-text-center">
                    <h1>User List</h1>
                </IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};

export default Header;
