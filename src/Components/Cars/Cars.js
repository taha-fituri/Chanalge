import "./Cars.css";
import Car from "./Car";
function Cars(props) {
  return (
    <div className="cars">
      <div className="divcard">
        {props.cars.map((e, i) => (
          <Car e={e} key={i} />
        ))}
        <div className="totalprice">
          <span>
            The Total Of Cars Price is :
            {props.cars.reduce((accumulator, cars) => {
              return accumulator + cars.price;
            }, 0)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Cars;
