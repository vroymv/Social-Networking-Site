import { sidebarLinks } from "../../Constants";
import { Link } from "react-router-dom";
import { logoIcon } from "../../assets/images";

export default function Header(props) {
    

    return (
        <div className="flex justify-between py-1 px-5 h-[10vh] border-b-4 border-[#2b2b35]">
                <img className="w-30" src={logoIcon} alt="Logo Icon" />
                <div className="flex items-center gap-3">
                {
                    sidebarLinks.map((link, index)=>{
                        return(
                            <Link key={index} to={link.route}>
                            <img src={link.imgURL} alt={link.label} />
                        </Link>
                        )
                    })
                }
                </div>
                <Link to={"/profile/" + props.userId}>
                    <img className="w-[2.5rem] h-[2.5rem] rounded-full" src={props.user} alt="Profile Image" />
                </Link>
            </div>
    )
}
