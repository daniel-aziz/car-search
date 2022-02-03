import axios from "axios";
import { SyntheticEvent, useState } from "react";
import Car from "../models/car";
import { BsGithub } from "react-icons/bs"
import { Notyf } from "notyf";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



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
                    }
                    else {
                        setGotInfo(false)
                        notyf.error("Car was not found")
                    }
                })
                .catch((error) => {
                    notyf.error("Car was not found")
                    setCarInfo(new Car())
                    setGotInfo(false)
                })
        }
        else {
            notyf.error("Invaild License Number") 
            setGotInfo(false)
        }
    }

    function changeNumber(args: SyntheticEvent) {
        setCarNum((args.target as HTMLInputElement).value);
    }

    return (
        <div className="search">

            {/* ------ Header ------ */}
            <div className="header">
                <div className="title-wrapper">
                    <h2 className="main-title">Car Search</h2>
                </div>

            </div>

            {/* ------ Main ------ */}
            <div className="main">

                <div className="input-wrapper">
                    <TextField onChange={changeNumber} className="inputNumber" id="outlined-basic" label="License Number" variant="outlined" />
                    <br /><br />
                    <Button className="inputButton" variant="contained" size="large" onClick={getCarInfo}>Search</Button>
                </div>
                <br /><br />
                <div className="info-wrapper">
                    <span className="key">Ownership Type:</span> <span className="value"> {gotInfo && carInfo.baalut} </span>
                    <br />
                    <span className="key">Model Code:</span> <span className="value"> {gotInfo && carInfo.degem_cd} </span>
                    <br />
                    <span className="key">Engine Model:</span> <span className="value"> {gotInfo && carInfo.degem_manoa} </span>
                    <br />
                    <span className="key">Model Name:</span> <span className="value"> {gotInfo && carInfo.degem_nm} </span>
                    <br />
                    <span className="key">Registration order:</span> <span className="value"> {gotInfo && carInfo.horaat_rishum} </span>
                    <br />
                    <span className="key">Market alias:</span> <span className="value"> {gotInfo && carInfo.kinuy_mishari} </span>
                    <br />
                    <span className="key">Registration Group:</span> <span className="value"> {gotInfo && carInfo.kvutzat_zihum} </span>
                    <br />
                    <span className="key">VIN:</span> <span className="value"> {gotInfo && carInfo.misgeret} </span>
                    <br />
                    <span className="key">Licence Number:</span> <span className="value"> {gotInfo && carInfo.mispar_rechev} </span>
                    <br />
                    <span className="key">Last Test Date:</span> <span className="value"> {gotInfo && new Date(carInfo.mivchan_acharon_dt).toLocaleDateString()} </span>
                    <br />
                    <span className="key">Date of Purchase:</span> <span className="value"> {gotInfo && carInfo.moed_aliya_lakvish} </span>
                    <br />
                    <span className="key">Safety Level:</span> <span className="value"> {gotInfo && carInfo.ramat_eivzur_betihuty} </span>
                    <br />
                    <span className="key">Grade Name:</span> <span className="value"> {gotInfo && carInfo.ramat_gimur} </span>
                    <br />
                    <span className="key">Rank:</span> <span className="value"> {gotInfo && carInfo.rank} </span>
                    <br />
                    <span className="key">Year:</span> <span className="value"> {gotInfo && carInfo.shnat_yitzur} </span>
                    <br />
                    <span className="key">Model Type:</span> <span className="value"> {gotInfo && carInfo.sug_degem} </span>
                    <br />
                    <span className="key">Engine Type:</span> <span className="value"> {gotInfo && carInfo.sug_delek_nm} </span>
                    <br />
                    <span className="key">License Expariton Date:</span> <span className="value"> {gotInfo && new Date(carInfo.tokef_dt).toLocaleDateString()} </span>
                    <br />
                    <span className="key">Manufactur Code:</span> <span className="value"> {gotInfo && carInfo.tozeret_cd} </span>
                    <br />
                    <span className="key">Manufactur:</span> <span className="value"> {gotInfo && carInfo.tozeret_nm} </span>
                    <br />
                    <span className="key">Color Code:</span> <span className="value"> {gotInfo && carInfo.tzeva_cd} </span>
                    <br />
                    <span className="key">Color:</span> <span className="value"> {gotInfo && carInfo.tzeva_rechev} </span>
                    <br />
                    <span className="key">Front Tire:</span> <span className="value"> {gotInfo && carInfo.zmig_kidmi} </span>
                    <br />
                    <span className="key">Rear Tire:</span> <span className="value"> {gotInfo && carInfo.zmig_ahori} </span>
                    <br />
                </div>
            </div>

            {/* ------ Footer ------ */}
            <div className="footer">
                <div className="icons-wrapper">
                    <a className="icons" href="https://github.com/daniel-aziz/car-search"><BsGithub size='2em' /></a>
                </div>
            </div>

        </div>
    );
}

export default Search;