import axios from "axios";
import { SyntheticEvent, useState } from "react";
import Car from "../models/car";
import { BsGithub } from "react-icons/bs"
import { Notyf } from "notyf";
import Button from '@mui/material/Button';


var notyf = new Notyf({ duration: 1000, ripple: true, position: { x: 'center', y: 'bottom' } })

function Search(): JSX.Element {
    const [carNum, setCarNum] = useState("");
    const [carInfo, setCarInfo] = useState(new Car());
    const [gotInfo, setGotInfo] = useState(false)
    const apiUrl = 'https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q='

    const getCarInfo = () => {
        if (carNum.length === 7 || carNum.length === 8) {
            axios.get(apiUrl + carNum)
                .then((result) => {
                    let car: Car = result.data.result.records[0];
                    if (car.mispar_rechev.toString().length > 0) {
                        setCarInfo(car)
                        setGotInfo(true)
                        notyf.success("Car Found!")
                        console.log(car)
                    }
                    else notyf.error("Car was not found")
                })
                .catch((error) => {
                    notyf.error("Car was not found")
                    setCarInfo(new Car())
                })
        }
        else notyf.error("Invail Number")
    }

    function changeNumber(args: SyntheticEvent) {
        setCarNum((args.target as HTMLInputElement).value);
    }

    return (
        <div className="search">

            {/* ------ Header ------ */}
            <div className="header">
                <a className="icons" href="https://github.com/daniel-aziz/car-search"><BsGithub size='2em' /></a>
                <div className="title-wrapper">
                    <h2>Car Search</h2>
                </div>

            </div>

            {/* ------ Main ------ */}
            <div className="main">

                <div className="input-wrapper">
                    <input onChange={changeNumber} type="number" placeholder="Licence Number" />
                    <br />
                    <Button variant="contained" size="large" onClick={getCarInfo}>Search</Button>
                </div>
                <br />
                <div className="info-wrapper">
                    <span className="key">Licence Number:</span> <span className="value"> {gotInfo && carInfo.mispar_rechev} </span>
                    <br />
                    <span className="key">Owner Type:</span> <span className="value"> {gotInfo && carInfo.baalut} </span>
                    <br />
                    <span className="key">Manufactur:</span> <span className="value"> { gotInfo && carInfo.tozeret_nm} </span>
                    <br />
                    <span className="key">Year:</span> <span className="value"> { gotInfo && carInfo.shnat_yitzur} </span>
                    <br />
                    <span className="key">Color:</span> <span className="value"> {gotInfo && carInfo.tzeva_rechev} </span>
                    <br />
                    <span className="key">Engine Type:</span> <span className="value"> {gotInfo && carInfo.sug_delek_nm} </span>
                    <br />
                    <span className="key">Licence Expariton Date :</span> <span className="value"> {gotInfo && new Date(carInfo.tokef_dt).toLocaleDateString()} </span>
                    <br />
                    <span className="key">Licence Expariton Date :</span> <span className="value"> {gotInfo && new Date(carInfo.tokef_dt).toLocaleDateString()} </span>
                    <br />
                    <span className="key">Licence Expariton Date :</span> <span className="value"> {gotInfo && new Date(carInfo.tokef_dt).toLocaleDateString()} </span>
                    <br />
                    <span className="key">Licence Expariton Date :</span> <span className="value"> {gotInfo && new Date(carInfo.tokef_dt).toLocaleDateString()} </span>
                    <br />
                </div>
                

            </div>

            {/* ------ Footer ------ */}
            <div className="footer">

            </div>

        </div>
    );
}

export default Search;