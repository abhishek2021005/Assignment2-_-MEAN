import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";

// // const heading = React.createElement("h1", {id: "Heading"}, "Hello world from React");
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "h1 from React"),
//     React.createElement("h2", {}, "h2 from React"),
//   ])
// );
// const root1 = ReactDOM.createRoot(document.getElementById("root"));
// console.log(parent);
// root1.render(parent);

//# JSX - HTML like or XML like syntax
// const elem = <span>Hello</span>;
// const jsxHeading = (<h1 className="heading">
//   {elem}
//   Namaste
// React using JSX
// </h1>);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// // React components
// const HeadingComponent = () =>{
//   return <h1>Namaste React Nesting </h1>;
// }
// // these two are same
// // React Fragment behaves like an empty tag
// const HeadingComponent2 = () => (
// <React.Fragment>
//   <>
//   {/* <>both are same */}
// <div id ="container">
// {jsxHeading}
// {/* Hello */
// <h2>{
// 150+200}</h2>}

// <HeadingComponent/>
// <HeadingComponent></HeadingComponent>
// {HeadingComponent()}
// <h1>Namaste hhr React using Functional Component</h1>
// </div>
// <div id="container2">HIii</div>
// </>
// </React.Fragment>
// );

// // root.render(jsxHeading);
// root.render(<HeadingComponent2/>)

const styleCard = {
  backgroundColor: "	#D3D3D3",
};

// in both way we can do first way is destructuring of object on the way
// const RestaurantCard = ({resName,cuisine}) => {

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resid",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
