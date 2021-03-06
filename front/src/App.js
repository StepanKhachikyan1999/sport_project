// styles
import "./style/App.scss"

import {  Routes, Route } from "react-router-dom";

// custom imports

import List from "./pages/list/List";
import Single from "./pages/single/Single";
import Layout from "./components/Layout";
import DashboardAdmin from "./pages/Dashboard/Dashboard";
import Welcome from "./pages/Welcome/Welcome";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import SignUp from "./pages/signup/SignUp";
import Signin from "./pages/signin/Signin";
import SelectActivity from "./pages/selectActivity/SelectActivity";
import GetActive from "./pages/getactive/GetActive";
import ActivityMap from "./pages/activityMap/ActivityMap";
import Teams from "./pages/teams/Teams";
import Invitations from "./pages/Invitations/Invitations";
import ChatMain from "./pages/Chat/ChatMain";

function App() {

  return (
    <div>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route path="/" element={<DashboardAdmin />} />
                  <Route path="/list" element={<List />} />
                  <Route path="/products" element={<List />} />

                  <Route path="/users/new" element={<Single />} />
                  <Route path="/dashboard" element={<DashboardAdmin />} />

                  <Route path="/getActive" element={<GetActive />} />

                  {/*map start*/}
                  <Route path="/activityMap" element={<ActivityMap />} />
                  {/*map end*/}
                  <Route path={'/inbox'} element={<ChatMain/>}/>

                  <Route path="/teams" element={<Teams />} />
                  <Route path="/invitations" element={<Invitations />} />

              </Route>

              {/*home slider start*/}
              <Route path="/home" element={<Welcome />} />
              {/*home slider end*/}

              {/*sign_in and signup start*/}
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<SignUp />} />
              {/*sign_in and signup start*/}

              {/*activity start*/}
              <Route path="/select_activity" element={<SelectActivity />} />
              {/*activity end*/}

              {/*not found page start*/}
            <Route path="*" element={<PageNotFound />} />
              {/*not found page start*/}
        </Routes>
    </div>
  );
}

export default App;