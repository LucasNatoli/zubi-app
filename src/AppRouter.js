import { Route } from 'react-router-dom'
import React from 'react';
import DashboardInstructor from "./DashboardInstructor";
import WizardCapacitacion from './WizardCapacitacion/WizardCapacitacion'
import WizardConsultoria from './WizardConsultoria/WizardConsultoria'
import Perfil from './Perfil';

export default function AppRouter() {
  return (
    <main>
        <Route exact path='/' component={DashboardInstructor}/>
        <Route path="/instructor/capacitacion/:id" component={WizardCapacitacion} />
        <Route path="/instructor/consultoria/:id" component={WizardConsultoria} />
        <Route path="/mi-perfil" component={Perfil} /> 
    </main>
  );
}