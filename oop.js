class Sekolah {
    constructor(_namaSekolah){
        this._namaSekolah = _namaSekolah
        this._siswaData = []
    }
    get siswaData(){
        return this._siswaData
    }
    set siswaData(siswa){
        this._siswaData = siswa
    }
}
class Siswa {
    constructor(_nama){
        this._nama = _nama
    }
    get nama(){
        return this._nama
    }
    set nama(nama){
        this._nama = nama
    }
}

let dataSiswa = 
[{ 
    sekolahPertama : 
    [{
        nama : "Ade Bambang Firmansyah",
        jenisKelamin : "Laki-laki",
        namaOrantua : {
            bapak : "Syafie",
            ibu : "abidah daniya",
        }
    },{
        nama: "Ade Kurnia",
        jenisKelamin: "Laki-laki",
        namaOrantua : {
            bapak : "Muhammad Zaim",
            ibu : "Adawiyatul Mariah",
        }
    },{
        nama: "Afif Maulana",
        jenisKelamin: "Laki-laki",
        namaOrantua : {
            bapak : "Agus Joko Susilo",
            ibu : "Dariah Husniah",
        }
    },{
        nama: "Afif Riana",
        jenisKelamin: "Laki-laki",
        namaOrantua : {
            bapak : "Samuel Anderson",
            ibu : "Haida Zahratussalamah",
        }
    },{
        nama: "Agung Nugraha",
        jenisKelamin: "Laki-laki",
        namaOrantua : {
            bapak : "Friyadi Simamora",
            ibu : "habibah jalilah",
        }
    }],
    sekolahKedua : 
    [{
        nama: "Alan Maulana",
        jenisKelamin: "Laki-laki",
        namaOrantua : {
            bapak : "Pujianto",
            ibu : "Ghaziyah Fathiya",
        }
    },{
        nama: "Asep Saeful Rizal",
        jenisKelamin: "Laki-laki",
        namaOrantua : {
            bapak : "Edwin Nurdiansyah",
            ibu : "Gazala Nisa",
        }
    },{
        nama: "Asep Somantri",
        jenisKelamin: "Laki-laki",
        namaOrantua : {
            bapak : "Yopie Roy Munanto",
            ibu : "Fatinah Samra",
        }
    },{
        nama: "Ati Isnawati",
        jenisKelamin: "Perempuan",
        namaOrantua : {
            bapak : "Syafie",
            ibu : "Farida Fakhriyyah",
        }
    },{
        nama: "Dede Olan Maulani",
        jenisKelamin: "Laki-laki",
        namaOrantua : {
            bapak : "Rahadian Rahim",
            ibu : "Durriya Askanah",
        }
    }]
}]
let sekolah = new Sekolah(["Sekolah Panjat Tebing Kota Mimpi","Sekolah Panjat Pinang Kota Dongeng"])
let siswa = new Siswa([dataSiswa[0].sekolahPertama, dataSiswa[0].sekolahKedua])
sekolah._siswaData = siswa
console.log(sekolah._siswaData._nama[0][0])
for(let i = 0; i < 2; i++){
    if(i == 0)document.write(`<p style="text-align: center;"> Data ${sekolah._namaSekolah[i]}</p>`)
    else if(i == 1)document.write(`<hr /><p style="text-align: center;"> Data ${sekolah._namaSekolah[i]}</p>`)
    for(let x = 0; x < 5; x++){
        document.write(`<hr />
        <p>
            Nama Siswa : ${sekolah._siswaData._nama[i][x].nama} <br />
            Jenis Kelamin : ${sekolah._siswaData._nama[i][x].jenisKelamin} <br />
            Nama org Tua : <br />
            Bapak : ${sekolah._siswaData._nama[i][x].namaOrantua.bapak} <br />
            Ibu : ${sekolah._siswaData._nama[i][x].namaOrantua.ibu}
        </p>
        `)
    }
}