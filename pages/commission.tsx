import { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout/Layout";

const CommissionPage : NextPage = () => {


  return (
    <div>
      <Head>
				<title>I Am Glaze - Business</title>
				<link rel="shortcut icon" href="/static/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap"
					rel="stylesheet"
				/>
				<meta
					name="description"
					content="Commission and business infromation about Glaze's work."
					key="desc"
				/>
      </Head>

      <Layout>
        <div className="w-full h-screen sm-phone:h-full">
          <h1>Under Construction.</h1>
        </div>
      </Layout>

    </div>
  )
};

export default CommissionPage;