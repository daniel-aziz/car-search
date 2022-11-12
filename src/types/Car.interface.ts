export interface Car {
    _id: number;
    mispar_rechev: number;
    tozeret_cd: number;
    sug_degem: string;
    tozeret_nm: string;
    degem_cd: number;
    degem_nm: string;
    ramat_gimur: string;
    ramat_eivzur_betihuty?: any;
    kvutzat_zihum: number;
    shnat_yitzur: number;
    degem_manoa: string;
    mivchan_acharon_dt: Date;
    tokef_dt: Date;
    baalut: string;
    misgeret: string;
    tzeva_cd: number;
    tzeva_rechev: string;
    zmig_kidmi: string;
    zmig_ahori: string;
    sug_delek_nm: string;
    horaat_rishum?: any;
    moed_aliya_lakvish: string;
    kinuy_mishari: string;
    rank: number;
}

export type TCar = Car | undefined
