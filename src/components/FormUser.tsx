/* Import Formik */
import { Formik } from "formik";

/* Import Ionic Components */
import {
    IonButton,
    IonCol,
    IonInput,
    IonItem,
    IonLabel,
    IonRow,
    IonTitle,
} from "@ionic/react";

/* Interface Errors */
interface IErrors {
    email: string;
}

/* FormUser Component */
const FormUser: React.FC = () => {
    return (
        <>
            <IonTitle className="ion-text-center">Add A User</IonTitle>
            <Formik
                initialValues={{ email: "", password: "", job: "" }}
                validate={(values) => {
                    const errors: IErrors | any = {};
                    if (!values.email) {
                        errors.email = "Required";
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            values.email
                        )
                    ) {
                        errors.email = "Invalid email address";
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel>Email</IonLabel>
                                    <IonInput
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        {errors.email && touched.email && errors.email}
                        <IonItem>
                            <IonLabel>Password</IonLabel>
                            <IonRow>
                                <IonCol>
                                    <IonInput
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                </IonCol>
                            </IonRow>
                        </IonItem>
                        {errors.password && touched.password && errors.password}
                        <IonItem>
                            <IonLabel>Job</IonLabel>
                            <IonRow>
                                <IonCol>
                                    <IonInput
                                        type="text"
                                        name="job"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.job}
                                    />
                                </IonCol>
                            </IonRow>
                        </IonItem>
                        <IonButton 
                            type="submit" 
                            disabled={isSubmitting}
                            expand="block"
                            className="ion-margin-top ion-padding"
                        >
                            Add This User
                        </IonButton>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default FormUser;
