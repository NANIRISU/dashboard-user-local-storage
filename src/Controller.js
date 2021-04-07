import React  from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardLayout from './component/dashboardLayout/DashboardLayout';
import Home from './screen/home/Home';
import Recruitment from './screen/recruitment/Recruitment';
import Onboarding from './screen/onboarding/Onboarding';
import Reports from './screen/reports/Reports';
import Calendar from './screen/calendar/Calendar';
import Settings from './screen/settings/Settings'
import Login from './screen/login/Login';
import User from './screen/user/User';
import Register from './screen/register/Register';

 const Controller=()=>{
    
     return(
        <BrowserRouter >
        <Switch>
        <Route path="/login" render={(props)=><Login {...props}/>}/>
        <Route path="/user" render={(props)=><User {...props}/>}/>
        <Route path="/register" render={(props)=><Register {...props}/>}/>
        <DashboardLayout>
            <Route exact path="/" render={(props)=><Home {...props} />}/>
            <Route path ="/recruitment" render={(props)=><Recruitment {...props}/>}/>
            <Route path="/onboarding" render={(props)=><Onboarding {...props}/>}/>
            <Route path="/reports" render={(props)=><Reports {...props}/>}/>
            <Route path="/calendar" render={(props)=><Calendar {...props}/>}/>
            <Route path="/settings" render={(props)=><Settings {...props}/>}/>
            </DashboardLayout>
        </Switch>
       
        </BrowserRouter>
     )
 }

 export default Controller;