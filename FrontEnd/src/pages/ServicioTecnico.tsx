import "../index.css"
import "../App.css";
import Navbar from "../components/navbar";
import colision from "./Images/colision_frontal.webp"
import mantenimiento from "./Images/mantenimientos_preventivos.webp"
import pastillas from "./Images/pastillas_de_frenos.webp"
import banner from "./Images/banner_taller.webp"
import servicio from "./Images/servicio_tecnico.svg"
import insta from "./Images/insta-logo.png"
import face from "./Images/Screenshot_1.jpg"
function ServicioTecnico(){
    return(
        <>
        <Navbar></Navbar>
         <div className="flex-1 flex">
            <div className="w-1/5"></div>

        <div className="w-3/5 flex flex-col">
       
            <h1 className="text-3xl font-bold mb-4">Promociones</h1>
            <div className="flex justify-center space-x-4">
                <img src={colision} alt="" className="w-1/3"/>
                <img src={mantenimiento} alt="" className="w-1/3"/>
                <img src={pastillas} alt="" className="w-1/3"/>
            </div>
            <h1 className="text-3xl font-bold mb-4 mt-2">Agenda tu cita en los talleres</h1>
            <div className="flex bg-gray-300">
                <div className="w-2/3 p-4">
                    <iframe width="100%" height="300" className="border-0"
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d56611.97337781244!2d-63.22908070759499!3d-17.80214409286347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stoyosa!5e0!3m2!1ses-419!2sbo!4v1699539711031!5m2!1ses-419!2sbo"
                        ></iframe>
                </div>
                <div className="w-1/3 p-4">
                    
                    <h2>Elije un Departamento:</h2>
                    <input type="text" className="w-full p-2 border rounded mt-2" placeholder="Type something..."/>
                    <div className="mt-2 border bg-white h-60 border-red-500 p-2">
                        
                        <p>This is a red-bordered div.</p>
                    </div>
                </div>
            </div>
            <div className="flex bg-gray-300 mt-6">
                <div className="w-2/3 p-4">
                    <img src={banner} alt=""/>
                </div>
                <div className="w-1/3 p-4">
                    <div className="mt-2 border bg-white h-60 p-2 items-center text-center">
                        <img src={servicio} alt=""/>
                        <button
                            className="mt-4 hover:bg-gray-800 text-white font-semibold py-2 px-4 border border-gray-400 bg-black rounded-full shadow w-full">
                            Agendar
                        </button>
                    </div>
                </div>
            </div>
            <p className="mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum</p>

        </div>

        <div className="w-1/5"></div>
    </div>
    <div id="footer" className="flex bg-gray-800 font-bold w-full mt-4">
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
        </>
    );
}
export default ServicioTecnico;