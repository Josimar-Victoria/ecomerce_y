/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import  logo  from  '../../img/logo.svg'
import Variedades from './Variedades'
import './styles.css'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <>
        <header className="header">
            <nav className="nav">
                <Link to='/'>
                  <img src={logo} alt="logo" width="40px" height="100%" />
                </Link>
                <ul className='nav_items'>
                    <li className="nav_item-list"><Link className="nav_item_ancor_list" to='#'>Ayuda</Link>
                    <ul className='nav_subMenu'>
                        <h2 className='nav_title'>Ayuda</h2>
                        <li><Link className="nav_item_submenu_list" to="#">Estado de pedido</Link></li>
                        <li><Link className="nav_item_submenu_list" to="#">Envio y entrega</Link></li>
                        <li><Link className="nav_item_submenu_list" to="#">Devoluciones</Link></li>
                        <li><Link className="nav_item_submenu_list" to="#">Comunicate con nosotros</Link></li>
                        <li><Link className="nav_item_submenu_list" to="#">Politica de privacidad</Link></li>
                        <li><Link className="nav_item_submenu_list" to="#">Terminos de rebajas</Link></li>
                        <li><Link className="nav_item_submenu_list" to="#">Terminos de uso</Link></li>
                        <li><Link className="nav_item_submenu_list" to="#">Envianos tus comentarios</Link></li>
                     </ul>
                  </li>
                    <li className="nav_item-list"><Link className="nav_item_ancor_list" to='#'>Unete</Link></li>
                    <li className="nav_item-list"><Link className="nav_item_ancor_list" to='/iniciarsecion'>Iniciar sesion</Link></li>
                </ul>
            </nav>
            <Variedades/>
        </header>
       
        </>
    )
}
