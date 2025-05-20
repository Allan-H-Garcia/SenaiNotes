import tag from "../../assets/imgs/Tag.png";
import home from "../../assets/imgs/Home.svg";
import logo from "../../assets/imgs/logo.svg";
// import Archive from "../../assets/Archive.svg";


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
                    <img className="tag" src={home} alt="." />
                    Archived Notes</button> 

                <p>Tags</p>
                <button>
                    <img className="tag" src={tag} alt="Tag." />
                    Cooking</button>
                <button>
                    <img className="tag" src={tag} alt="Tag." />
                    Cooking</button>
                <button>
                    <img className="tag" src={tag} alt="Tag." />
                    Cooking</button>
                <button>
                    <img className="tag" src={tag} alt="Tag." />
                    Cooking</button>



            </div>

            </div> 

        </>



    );

}
export default LeftPanel;