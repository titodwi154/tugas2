import Menu from '../../components/menu';
import Layout from '../../layouts/layout';
import DaftarBerita from '../../components/daftarberita';

const Berita = (props) => {
    return (
    <Layout>
        <Menu />
        <DaftarBerita />
        <link rel="stylesheet" href="/css/berita.css" />
  
    </Layout>
    )
}

export default Berita;

