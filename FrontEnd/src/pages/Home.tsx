import "../index.css"
import "../App.css";
import vector from "./Images/vector-technical-support-glyph-icons.jpg"
import banner from "./Images/banner-toyosa.webp"
import tool from "./Images/tool.jpg"
import cart from "./Images/cart.png"
import apple from "./Images/boton_apple_store.svg"
import googlePlay from "./Images/boton_google_play.svg"
import logoContact from "./Images/logo_contact_center.svg"
import appToyosa from "./Images/app-toyosa.webp"
import insta from "./Images/insta-logo.png"
import face from "./Images/Screenshot_1.jpg"
import Navbar from "../components/navbar";
function Home(){
    return(
        <>
        <div className="flex flex-col min-h-screen">
            
        <Navbar></Navbar>
    <img className="w-full" src={banner} alt=""/>
    <div className="flex mt-6">
        <div className="w-1/6"></div>
        <div className="w-4/6 flex">
            <div className="w-3/4">
                <h1 className="font-bold text-3xl">TODOS NUESTROS SERVICIOS</h1>
                <h1 className="font-bold text-3xl">EN UN SOLO CLICK</h1>
                <p className="mt-2">Con nuestra aplicación móvil podrás acceder a todos los servicios Toyosa, desde la comodidad de tu hogar u oficina.</p>
                <div className="flex">
                    <div className="w-1/9">
                        <img className="h-20" src={vector} alt=""/>
                    </div>
                    <div className="w-8/9 ml-4">
                        <h1 className="font-bold text-xl">Servicio Tecnico</h1>
                        <p>Agenda tu cita de Servicio Técnico en nuestro taller más cercano.</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-1/9">
                        <img className="h-20 w-full object-cover ml-0" src={tool} alt=""/>
                    </div>
                    <div className="w-8/9 ml-8">
                        <h1 className="font-bold text-xl">Taller Móvil</h1>
                        <p>Llevamos nuestro servicio de mantenimiento a tu casa u oficina con la experiencia y seguridad que brindan nuestros técnicos altamente calificados.</p>
                    </div>
                </div>
                <div className="flex mt-2">
                    <div className="w-1/9">
                        <img className="h-14 w-full object-cover ml-0" src={cart} alt=""/>
                    </div>
                    <div className="w-8/9 ml-8">
                        <h1 className="font-bold text-xl">E-commerce de Repuestos</h1>
                        <p>Ponemos a su disposición repuestos de calidad garantizada a precios competitivos.</p>
                    </div>
                </div>
                <p className="mt-6">Descarga nuestra aplicación móvil</p>
                <div className="flex mt-2">
                    <img className="h-20" src={apple} alt=""/>
                    <img className="h-20" src={googlePlay} alt=""/>
                </div>
                <p className="mt-8">Agenda tu cita de Servicio Técnico en nuestro taller más cercano.</p>
                <img className="h-20 mt-8" src={logoContact} alt=""/>
            </div>
            <div className="w-2/4">
                <img src={appToyosa} alt=""/>
            </div>
            
        </div>
        <div className="w-1/6"></div>
        
    </div>
    <div id="footer" className="flex bg-gray-800 font-bold w-full">
        <div className="w-1/5"></div>
        <div className="w-3/5 flex">
            <div className="w-1/4 text-white mt-4 mb-4">
                <h2>Contactanos</h2>
            </div>
            <div className="w-1/4 text-white mt-4 mb-4">
                <h2>Sobre Nosotros</h2>
            </div>
            <div className="w-1/4 text-white mt-4 mb-4">
                <h2>Noticias</h2>
            </div>
            <div className="w-1/4 flex">
                <img className="h-10 mt-2" src={insta} alt=""/>
                <img className="h-10 mt-2 ml-6" src={face} alt=""/>
            </div>
        </div>
        <div className="w-1/5"></div>
    </div>
    <div className="flex bg-gray-800 w-full mt-0.5 text-xs">
        <div className="w-1/5"></div>
        <div className="w-3/5 flex">
            <div className="w-1/4 text-white mt-1 mb-1">
                <p>Condiciones de uso</p>
            </div>
            <div className="w-1/4 text-white mt-1 mb-1">
                <p>Politica de privacidad</p>
            </div>
            <div className="w-1/4 text-white mt-1 mb-1">
                
            </div>
            <div className="w-1/4 text-white mt-1 mb-1">
                <p>© Toyosa copyright</p>
            </div>
    
        </div>
        <div className="w-1/5"></div>
    </div>

        </div>
        
    
        </>
    );
}
export default Home;