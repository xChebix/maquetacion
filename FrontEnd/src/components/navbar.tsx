import "../index.css"
import "../App.css";

function navbar(){
    return(
        <>
        <nav className="bg-white text-black p-4 flex items-center justify-between w-100%">
            <div className="left">
                <a href="#" className="text-2xl font-bold">TOYOSA</a>
            </div>
            <div className="center space-x-4">
                <a href="/">Vehículos de Navegación</a>
                <a href="/ServicioTecnico" className="border-l pl-4">🏷 Servicio Técnico</a>
                <a className="border-l pl-4">Taller Móvil</a>
                <a className="border-l pl-4">E-Commerce</a>
            </div>
            <div className="right space-x-4">
                <a href="/Login" >Login</a>
                <a href="/RegisterUser" className="border-l pl-4">Registro</a>
            </div>
        </nav>
        </>
    );
}
export default navbar;