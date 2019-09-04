import React from 'react';
import './css/App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Article from "./components/Article";
import {articleHeading} from "./components/pageSvg";
import {connect} from "react-redux";
import {setLoginAC} from "./actions/SingInAC";
import LoginFormsRedux from "./components/LoginForm";

const App = (props) => {

  return (
      <div className=" coverApp h-100">
          {props.isLogin && <LoginFormsRedux isLogin={props.isLogin} forms={props.form} setLogin={props.setLogin}/> }
          <div className="container-fluid align-items-center">
              <div >
                  <Header />
                  <h1 className="text-center">Сервер видеоконференцсвязи компании %company</h1>
                  <Article />
                  <Footer />
              </div>
          </div>
      </div>  );
}

let mapStateToProps = (state) => {

    return {
        isLogin: state.singIn.isLogin,
        form: state.form
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setLogin: (isLogin) => {
            dispatch(setLoginAC(isLogin));
        }
    };
};


const AppData = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppData;
