import { TCar } from '../../../../types/Car.interface'

interface InfoTableProps {
    car: TCar
}
const InfoTable = ({ car: carInfo }: InfoTableProps) => {
    return (
        <div className="info-wrapper">
            <span className="key">Ownership Type:</span>{' '}
            <span className="value"> {carInfo && carInfo.baalut} </span>
            <br />
            <span className="key">Model Code:</span>{' '}
            <span className="value"> {carInfo && carInfo.degem_cd} </span>
            <br />
            <span className="key">Engine Model:</span>{' '}
            <span className="value"> {carInfo && carInfo.degem_manoa} </span>
            <br />
            <span className="key">Model Name:</span>{' '}
            <span className="value"> {carInfo && carInfo.degem_nm} </span>
            <br />
            <span className="key">Registration order:</span>{' '}
            <span className="value"> {carInfo && carInfo.horaat_rishum} </span>
            <br />
            <span className="key">Market alias:</span>{' '}
            <span className="value"> {carInfo && carInfo.kinuy_mishari} </span>
            <br />
            <span className="key">Registration Group:</span>{' '}
            <span className="value"> {carInfo && carInfo.kvutzat_zihum} </span>
            <br />
            <span className="key">VIN:</span>{' '}
            <span className="value"> {carInfo && carInfo.misgeret} </span>
            <br />
            <span className="key">Licence Number:</span>{' '}
            <span className="value"> {carInfo && carInfo.mispar_rechev} </span>
            <br />
            <span className="key">Last Test Date:</span>{' '}
            <span className="value">
                {' '}
                {carInfo &&
                    new Date(
                        carInfo.mivchan_acharon_dt
                    ).toLocaleDateString()}{' '}
            </span>
            <br />
            <span className="key">Date of Purchase:</span>{' '}
            <span className="value">
                {' '}
                {carInfo && carInfo.moed_aliya_lakvish}{' '}
            </span>
            <br />
            <span className="key">Safety Level:</span>{' '}
            <span className="value">
                {' '}
                {carInfo && carInfo.ramat_eivzur_betihuty}{' '}
            </span>
            <br />
            <span className="key">Grade Name:</span>{' '}
            <span className="value"> {carInfo && carInfo.ramat_gimur} </span>
            <br />
            <span className="key">Rank:</span>{' '}
            <span className="value"> {carInfo && carInfo.rank} </span>
            <br />
            <span className="key">Year:</span>{' '}
            <span className="value"> {carInfo && carInfo.shnat_yitzur} </span>
            <br />
            <span className="key">Model Type:</span>{' '}
            <span className="value"> {carInfo && carInfo.sug_degem} </span>
            <br />
            <span className="key">Engine Type:</span>{' '}
            <span className="value"> {carInfo && carInfo.sug_delek_nm} </span>
            <br />
            <span className="key">License Expariton Date:</span>{' '}
            <span className="value">
                {' '}
                {carInfo &&
                    new Date(carInfo.tokef_dt).toLocaleDateString()}{' '}
            </span>
            <br />
            <span className="key">Manufactur Code:</span>{' '}
            <span className="value"> {carInfo && carInfo.tozeret_cd} </span>
            <br />
            <span className="key">Manufactur:</span>{' '}
            <span className="value"> {carInfo && carInfo.tozeret_nm} </span>
            <br />
            <span className="key">Color Code:</span>{' '}
            <span className="value"> {carInfo && carInfo.tzeva_cd} </span>
            <br />
            <span className="key">Color:</span>{' '}
            <span className="value"> {carInfo && carInfo.tzeva_rechev} </span>
            <br />
            <span className="key">Front Tire:</span>{' '}
            <span className="value"> {carInfo && carInfo.zmig_kidmi} </span>
            <br />
            <span className="key">Rear Tire:</span>{' '}
            <span className="value"> {carInfo && carInfo.zmig_ahori} </span>
            <br />
        </div>
    )
}

export default InfoTable
