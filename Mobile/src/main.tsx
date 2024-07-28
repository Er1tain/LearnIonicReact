import React from 'react';
import { createRoot } from 'react-dom/client';

import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Welcome';

import '@ionic/react/css/core.css';

import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.system.css';
import Profile from './pages/Reg';
import Welcome from './pages/Welcome';
import Reg from './pages/Reg';
import Auth from './pages/Auth';

setupIonicReact();

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/welcome">
          <Welcome/>
        </Route>

        <Route exact path="/">
          <Redirect to="/welcome " />
        </Route>

        <Route exact path="/reg">
          <Reg/>
        </Route>

        <Route exact path="/auth"> 
          <Auth/>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
  </React.StrictMode>
);
