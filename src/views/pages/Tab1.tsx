import { IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { shirt } from 'ionicons/icons';
import '../../assets/styles/css.css';
import CriadorPersonagem from '../components/CriadorPersonagem';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='ion-text-center'>
          <IonTitle className="titulo" >
            <IonIcon slot="start" icon={shirt} /> Criador de Personagem
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonTitle size="large">Tab 1</IonTitle>
        </IonHeader>
        <CriadorPersonagem />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
