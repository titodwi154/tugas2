import Link from 'next/link';


const DaftarBerita = () => (
    
    <div id="daftarberita">
    <p>
        daftar berita : <br />
        <ul>
            <li><Link href="/daftarberita/[kode]" as="/daftarberita/1"><a>Berita 1</a></Link></li>
            <li><Link href="/daftarberita/[kode]" as="/daftarberita/2"><a>Berita 2</a></Link></li>
            <li><Link href="/daftarberita/[kode]" as="/daftarberita/3"><a>Berita 3</a></Link></li>
        </ul>
    </p>
    </div>



)

export default DaftarBerita;