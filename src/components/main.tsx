import axios from "axios";
import { SyntheticEvent, useState } from "react";
import Car from "../models/car";
import { BsGithub } from "react-icons/bs"



function Main(): JSX.Element {
    const [carNum, setCarNum] = useState(0);
    const [carInfo, setCarInfo] = useState(new Car());
    const apiUrl = 'https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q='


    const getCarInfo = () => {
        console.log(apiUrl+carNum)
        axios.get(apiUrl + carNum)
            .then((result) => {
                console.log(result.data.result.records[0])
                setCarInfo(result.data.result.records[0])
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function changeNumber(args: SyntheticEvent) {
        let carId = (args.target as HTMLInputElement).value;
        console.log(carId)
        if (carId.length >= 7 && carId.length <= 8) setCarNum(parseInt(carId));
    }

    return (
        <div className="main">

            {/* ------ Header ------ */}
            <div className="header">
                <h3>Car Search</h3>
            </div>

            {/* ------ Body ------ */}
            <div className="body">

                <div className="input-wrapper">
                    <input onChange={changeNumber} type="text" placeholder="Licence Number" />
                    <br />
                    <button onClick={getCarInfo}>Search Car</button>
                </div>
                <br />
                <div className="info-wrapper">
                    <span className="key">Licence Number:</span> <span className="value"> {carInfo.mispar_rechev} </span>
                    <br />
                    <span className="key">Owner Type:</span> <span className="value"> {carInfo.baalut} </span>
                    <br />
                    <span className="key">Manufactur:</span> <span className="value"> {carInfo.tozeret_nm} </span>
                    <br />
                    <span className="key">Licence Number:</span> <span className="value"> {carInfo.mispar_rechev} </span>
                    <br />
                    <span className="key">Licence Number:</span> <span className="value"> {carInfo.mispar_rechev} </span>
                    <br />
                </div>

            </div>

            {/* ------ Footer ------ */}
            <div className="footer">
                <a className="icons" href="http://www.github.com/"><BsGithub size='2em' /></a>
            </div>

        </div>
    );
}

export default Main;