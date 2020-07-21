import React, { Component } from 'react';
import Menu from '../../components/menu';
import Layout from '../../layouts/layout';
import Link from 'next/link';
class Proyek extends Component{
 render(){
 return (
 <Layout>
     <Menu />
     <div id="left-conten"  >
 <h1>Proyek</h1>
 <p>Berikut adalah produk mie sedap:</p>
 <div id="right-conten" > <img src="/images/miesedap.jpg" /> </div>
 
 </div>
 </Layout>
 )
 }
}
export default Proyek;