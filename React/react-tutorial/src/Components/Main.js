// const name = "Sameera Jayakodi";

// const myObj = {
//   name: `${name}`,
//   city: "diyathalawa",
// };

function Main({ children, name, uni }) {
  //   const { city } = myObj;
  //   const { name } = myObj;
  return (
    <div>
      This is main Component <h3>{name}</h3>
      <h1>
        {name} {uni}
      </h1>
      {children}
    </div>
  );
}

export default Main;
