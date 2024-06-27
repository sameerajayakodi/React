import { Fragment } from "react";

function Main({ name, university, age, city }) {
  return (
    <Fragment>
      <div className=" grid-cols-3 grid-flow-col gap-2 bg-slate-200">
        <img src="https://images.unsplash.com/photo-1598214886806-c87b84b7078b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW1hZ2V8ZW58MHwwfDB8fHww" />

        {/* <h1>This is Main component</h1>
        <h2>{name}</h2>
        <h3>{university}</h3>
        <h3>{age}</h3>
        <h3>{city}</h3> */}
      </div>
    </Fragment>
  );
}

export default Main;
