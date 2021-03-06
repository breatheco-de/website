import React from "react"
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/layout"
import "../styles/index.css";
import "@breathecode/ui-components/dist/main.css";

const NotFoundPage = () => (
  <Layout>
  <div className="gradient vh-100">
  <div className="text-center">
  <div className='row text-center mb-5'>
        <div className="col">
          <div className="display-1 mb-5">
          Sorry i think you are lost
          </div>
          <img className="rounded mx-auto img-fluid" alt="Lost baby" src="https://github.com/breatheco-de/assets/blob/master/apis/img/funny/scared-baby.jpg?raw=true"/>
        </div>
       </div>
  </div>

  </div>

  </Layout>
)

export default NotFoundPage
