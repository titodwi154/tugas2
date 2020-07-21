import Link from 'next/link';
function Menu(){
 return (
<nav>
 <ul>
 <li><Link href="/"><a>Home</a></Link></li>
 <li><Link href="/daftarberita"><a>News</a></Link></li>
 <li><Link href="/foto"><a>Foto</a></Link></li>
 <li><Link href="/video"><a>Video</a></Link></li>
 <li><Link href="/politik"><a>Politik</a></Link></li>
 <li><Link href="/olga"><a>Sport</a></Link></li>
 <li><Link href="/news"><a>Teknologi</a></Link></li>
 <li><Link href="/news"><a>Nusantara</a></Link></li>
 </ul>
 </nav>
 );
}
export default Menu;