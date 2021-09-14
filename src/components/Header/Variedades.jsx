/* eslint-disable jsx-a11y/anchor-is-valid */
import './styles.css'
export default function Variedades() {
    return (
        <header className='header_variedades'>
            <nav className='nav_variedades'>
                <ul className='nav_variedades-items'>
                    <li  className='nav_variedades-list'><a href='#'>Nuevos lanzamientos</a>
                      <ul className='nav_variedades_submenu-items'>
                         <h4 className='nav_variedades-title'>Nuevos y destacados</h4>
                          <li className='nav_listados_variedades'><a href='#'>Comprar todas las novedades</a></li>
                          <li className='nav_listados_variedades'><a href='#'>Lo mejor de Air Force</a></li>
                          <li className='nav_listados_variedades'><a href='#'>Exclusivo miembros Nike</a></li>
                          <li className='nav_listados_variedades'><a href='#'>Nike Fleece</a></li>
                          <li className='nav_listados_variedades'><a href='#'>Jordan Essential</a></li>
                          <li className='nav_listados_variedades'><a href='#'>Nike x Space Jam</a></li>
                      </ul>
                      <ul className='nav_variedades_submenu-items2'>
                      <h4 className='nav_variedades-title'>Novedades para hombres</h4>
                          <li className='nav_listados_variedades'><a href='#'>Calzado</a></li>
                          <li className='nav_listados_variedades'><a href='#'>Ropa</a></li>
                          <li className='nav_listados_variedades'><a href='#'>Equipo</a></li>
                          <li className='nav_listados_variedades'><a href='#'>Comprar las novedades</a></li>
                      </ul>
                      <ul className='nav_variedades_submenu-items3'>
                      <h4 className='nav_variedades-title'>Novedades para mujeres</h4>
                          <li className='nav_listados_variedades'><a href='#'>Calzado</a></li>
                          <li className='nav_listados_variedades'><a href='#'>Ropa</a></li>
                          <li className='nav_listados_variedades'><a href='#'>Equipo</a></li>
                          <li className='nav_listados_variedades'><a href='#'>Comprar las novedades</a></li>
                      </ul>
                      
                    </li>
                    <li  className='nav_variedades-list'><a href='#'>Hombres</a></li>
                    <li  className='nav_variedades-list' ><a href='#'>Mujeres</a></li>
                    <li  className='nav_variedades-list'><a href='#'>Niños</a></li>
                    <li  className='nav_variedades-list'><a href='#'>Personalizar</a></li>
                    <li  className='nav_variedades-list'><a href='#'>Rebajas</a></li>
                </ul>
            </nav>
        </header>
    )
}
