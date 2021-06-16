import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import styles from './styles.module.css'
// const showRibbon = (e) => {
//     console.log(window.$(e.target).children());
//     //window.$('.bottomRib').css('display','flex');
//     console.log(window.$(e.target).children().hasClass('.bottomRib'));
//     window.$(e.target).children('.bottomRib').css('display','flex');
// }
// const hideRibbon = (e)=>{
//     window.$(e.target).children('.bottomRib').fadeOut();
// }
export default function Card(props) {
    const [ribbon, setRibbon] = useState(false);
    return (
            <div className={"col-12 mb-4 col-md-6 " + styles.collegePlate}>
                <div className={"card " + styles.collegePlateCard} onMouseEnter={(e)=>setRibbon(true)} onMouseLeave={(e)=>setRibbon(false)}>
                    <div class={"card-header " + styles.collegePlateCardHeader}>{props.title}</div>
                    <div className={"card-body " + styles.collegePlateCardBody}>
                        <div className={styles.collegePlateImgFrame}>
                            <img src={props.url} className={"" + styles.collegePlateImg} />
                        </div>
                        {ribbon ? <div className={styles.bottomribbon+" bottomRib"} >
                        <h5>{props.available ?<Link className="stretched-link" style={{textDecoration:"none",color:"white"}} to={`/college/${props.id}`} ><span style={{color:"#2b3aef"}}>Generate</span></Link>:<span>Coming Soon</span>}</h5></div> : <></>}
                    </div>
                </div>
            </div>

    )
}
