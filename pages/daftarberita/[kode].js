import Menu from '../../components/menu';
import Layout from '../../layouts/layout';
import dummyData from '../../dataset/dummy.json';
import DaftarBerita from '../../components/daftarberita';


const Berita = (props) => {
    return (
    <Layout>
        <Menu />

        <link rel="stylesheet" href="/css/berita.css" />
        <div id="isiberita">

            <h3>{props.judul}</h3>
            <article>
                <p>{props.isi}</p>
                {props.comen}                
            </article>
            <br />
            <hr />

            <h1>Berita Update!!!</h1>
        <p> <a href="/daftarberita/1">Saham Inggris ditutup menguat, indeks FTSE 100 terangkat 3,08 persen</a></p>
        <p><a href="/daftarberita/2">Target Pemerintah: Juni Angka Corona Turun, Juli Hidup Normal</a></p>
        <p> <a href="/daftarberita/3">Tak Efektif, ICW Minta Program Kartu Prakerja Dihentikan</a></p>

        </div>        
    </Layout>
    )
}

export default Berita;

export async function getStaticProps(context){
    let kode = context.params.kode;
    let data = dummyData.find(x => x.id == kode);

    let { judul, isi, comen } = data;
    
    return {
        props : {
            judul, isi, comen
        }
    }
}

export async function getStaticPaths(){
    return{
        paths : dummyData.map(data => (
            {params : {kode : `${data.id}`}}
        )),
        fallback : false
    }
}
