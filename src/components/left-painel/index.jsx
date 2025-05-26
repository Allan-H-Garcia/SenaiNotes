import tag from "../../assets/imgs/Tag.png";
import home from "../../assets/imgs/Home.svg";
import logo from "../../assets/imgs/logo.svg";
import archive from "../../assets/imgs/Archive.png";



function LeftPanel() {

    return (  
        <>

            <div>

            <img className="logo-one" src={logo} alt="Logo do SenaiLogo." />

            <div className="globo-tags">
                <button>
                    <img className="tag" src={home} alt="." />
                    All Notes</button>
                <button>
                    <img src={archive} alt="Enviar" />
                    Archived Notes</button> 

                <p>Tags</p>
                <button>
                    <img className="tag" src={tag} alt="Tag." />
                    Asia Travel</button>
                <button>
                    <img className="tag" src={tag} alt="Tag." />
                    Asia Travel</button>
                <button>
                    <img className="tag" src={tag} alt="Tag." />
                    Asia Travel</button>
                <button>
                    <img className="tag" src={tag} alt="Tag." />
                    Asia Travel</button>



            </div>

            </div> 

        </>



    );

}
export default LeftPanel;