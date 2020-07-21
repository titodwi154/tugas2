import Header from '../components/header';
import Footer from '../components/footer';
import Head from 'next/head';
import Right from '../components/right';
const Layout = (props) => (
 <div>
 <Head>
 <title>Latihan NextJS Portal Berita</title>
 <meta name="viewport" content="width=device-width, initialscale=1.0" />
 <link rel="stylesheet" href="/css/bootstrap/bootstrap.css" />
 <link rel="stylesheet" href="/css/style.css" />
 <link rel="stylesheet" href="/css/menu.css" />
 <link rel="stylesheet" href="/css/header.css" />
 <link rel="stylesheet" href="/css/footer.css" />
 </Head>

 <Header />

 <section className="section">
 <div className="container">
 {props.children}
 </div>
 </section>
 

 <Right />
 <Footer />


 </div> 
 
)
export default Layout;