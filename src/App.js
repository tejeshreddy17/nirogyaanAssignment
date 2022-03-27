import {Switch, Route} from 'react-router-dom'

import './App.css'

import RequestPage from './components/Requests'

import Observations from './components/Observations'

import MedicationPage from './components/ActiveMedications'

const App = () => (
  <Switch>
    <Route excat path="/medication" component={MedicationPage} />
  </Switch>
)

export default App
