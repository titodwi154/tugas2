import Menu from '../components/menu';
import Layout from '../layouts/layout';
import Footer from '../components/footer';
function Beranda(){
 return (
 <Layout>
      <Menu />
  <div id="left-conten"  >  
 <h1>Portal Berita Terbaru</h1>
 <p>Selamat datang di Portal berita yang dibuat oleh Tito dwi akoso dan Aldy fiantur rohman, halaman web ini adalah tugas dari matkul Pemrograman Web.</p>
 <p>Tahap belajar mengulik next js + css</p>

 </ div>
 </Layout>
 );
}
export default Beranda;